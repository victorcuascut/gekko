# Gekko
<!-- ![Logo](https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_500,h_300/https://www.newsbtc.com/wp-content/uploads/2018/04/bitcoin-money-500x300.jpg)    -->

## Goal: 
Make Money! Also be able to spin up as many Gekkos as I want on different machines. Each of these Gekkos will be able to publish buy and sell as well as run backtesting.
Build a distrubuted backtesting suite which can run on any computer.

## Tasks:
- ### Backtesting Suite
    - [ X ] Setup Backtesting tool packed in docker
    - [ X ] Load Gekko-Strategies repo
    - [ ] Cosolidate CSVs for all backtesting automatically
    - [ ] Improve back testing tool to support real market
    - [ X ] Create server to run backtests
        - [ X ] Remote control server
    - [ ] Setup alerts on failed backtest via email or Slack
    - [ ] Split backtest and Gekko into different dockers
    - [ X ] Mount strategies, config, and history via docker-compose.yml
    - [ ] Create Dashboard of backtest output
        - https://app.gekkoplus.com/marketplace
        - Exchange / Market Description / Market Price /Performance / Best Frequencies
        - Create Historical Performance graphs Performance/market
        - [Store trades in Google SpreadSheet](https://github.com/RJPGriffin/google-forms-gekko-plugin)
    
    
- ### Backtest data
    - [ X ] Build standalone databases google drive location which can store backtest data
        - [ ] Build a docker to create datasets
        - [ ] Set dataset creator to a cron
        - [Gekko Datasets](https://github.com/xFFFFF/Gekko-Datasets)
    - [ ] Update datasets to have at least 2 years of data which include 2019
        - Last 7, 14, 30, 60 days and 2 years:
    - [ X ] Create script to pull Gekko Datasets from Google Drive
        - perl backtest.pl -i -p binance:USDT:ALL -f last -t now
    - [ ] Automate test for month over month testing
    - [ X ] Fix strategies' dependencies.
    - [ ] Update code to show month over month percentage growth

- ### Trading Suite
    - [ ] Simulate Paper trading
    - [ X ] Set Gdax to use Market only trades and set post to false
    - [ ] Write live trades to CSV or Google Sheets
    - [ ] Setup trading bot to work via commandline
    - [ ] Make repo private
    - [ ] Add stop loss functionality 

- ## Additional:
    - [ ] Breakout gekko tools
    - [ ] Fix [tests](https://travis-ci.com/victorcuascut/gekko)
#


### Backtesters
- [japonicus](https://github.com/Gab0/japonicus)
- [gekkoga](https://github.com/gekkowarez/gekkoga)
- [Gekko-BacktestTool](https://github.com/xFFFFF/GekkoBacktestTool)
- [Gekko Automated Backtest](https://github.com/tommiehansen/gab)
- [Gekko Warez Bruteforce Backtester](https://github.com/gekkowarez/bruteforce)

### UI mode
- [Unofficial Material UI](https://github.com/H256/gekko-quasar-ui)
- [Controlling bots](https://github.com/CyborgDroid/gekko-python)

### CLI mode
- [Batch generation of configuration files](https://github.com/bettimms/multi-gekko)

### Plugins
- [Store trades in Google SpreadSheet](https://github.com/RJPGriffin/google-forms-gekko-plugin)
