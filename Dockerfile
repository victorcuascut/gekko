FROM node:8

ENV HOST localhost
ENV PORT 3000
ENV BACKTESTTOOL_VER=7.0
ENV BACKTESTTOOL_URL=https://github.com/xFFFFF/Gekko-BacktestTool/releases/download/v${BACKTESTTOOL_VER}/Gekko-BacktestTool-v${BACKTESTTOOL_VER}-Ubuntu-amd64.zip
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install GYP dependencies globally, will be used to code build other dependencies
RUN npm install -g --production node-gyp && \
    npm cache clean --force

# Install Gekko dependencies
COPY package.json .
RUN npm install --production && \
    npm install --production redis@0.10.0 talib@1.0.2 tulind@0.8.7 pg && \
    npm cache clean --force

# Install Gekko Broker dependencies
WORKDIR exchange
COPY exchange/package.json .
RUN npm install --production && \
    npm cache clean --force
WORKDIR ../

# Bundle app source
COPY . /usr/src/app

# Setup Backtesttool
RUN apt-get update
RUN apt-get install build-essential
RUN curl -L http://cpanmin.us | perl - App::cpanminus
RUN cpanm -n install Parallel::ForkManager Time::Elapsed Getopt::Long List::MoreUtils File::chdir Statistics::Basic DBI DBD::SQLite JSON::XS TOML File::Basename File::Find::Wanted Template LWP::UserAgent LWP::Protocol::https Set::CrossProduct DBD::CSV Text::Table File::Copy
RUN npm uninstall talib
RUN npm install mathjs convnetjs talib-stream zero-fill joi numbro gauss
RUN npm install tulind --no-save

EXPOSE 3000
RUN chmod +x /usr/src/app/docker-entrypoint.sh
ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]

CMD ["--config", "config.js", "--ui"]
