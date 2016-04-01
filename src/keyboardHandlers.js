var plugin = plugin || {};

plugin.keyboardHandlers = (function(){

  var public_api = {
    onKeydown: onKeydown,
    onKeypress: onKeypress,
    onKeyup: onKeyup
  };

  return public_api;

  /*****************************************
   *            KEYBOARD HANDLERS
   * @TODO convert to an engine that can handle more than one key
   ****************************************/
  function onKeydown(e){
    plugin.config.getSettings(function(settings){
      switch(e.keyCode){
        /**************************************
         *            TOGGLE KEYS
         *************************************/

        // LOTSIZE UP
        case settings.KEYS.TOGGLE_LOTSIZE_UP:
          plugin.toggleLotSize('up');
          break;

        // LOTSIZE DOWN
        case settings.KEYS.TOGGLE_LOTSIZE_DOWN:
          plugin.toggleLotSize('down');
          break;

          // OFFSET UP
        case settings.KEYS.TOGGLE_OFFSET_UP:
          plugin.toggleOffset('up');
          break;

          // OFFSET DOWN
        case settings.KEYS.TOGGLE_OFFSET_DOWN:
          plugin.toggleOffset('down');
          break;



        /********************************
         *          BUY ORDER KEYS
         ********************************/
        // place best limit bid order on the market
        case settings.KEYS.BID_BETTER:
          plugin.bidBetter();
          break;

        // place bid at current best bid
        case settings.KEYS.BID_WITH_BEST_BID:
          plugin.bidWithBest();
          break;

        // Place bid at (INCR) below the current best bid
        case settings.KEYS.BID_BELOW_BEST:
          plugin.bidBelowBest();
          break;

        // Place bid at (INCR) below the current best bid
        case settings.KEYS.BID_DOUBLE_BELOW_BEST:
          plugin.bidDoubleBelowBest();
          break;

        // place limit order at the current ask price
        case settings.KEYS.HIT_THE_OFFER:
          plugin.hitTheOffer();
          break;


        // place market buy
        case settings.KEYS.MARKET_BUY:
          plugin.marketBuy();
          break;



        /********************************
         *           SELL ORDER KEYS
         ********************************/
        // place the best limit sell on the market
        case settings.KEYS.OFFER_BETTER:
          plugin.offerBetter();
          break;

        // place offer at current best ask
        case settings.KEYS.OFFER_WITH_BEST_ASK:
          plugin.offerWithBest();
          break;

        // place offer at current best ask
        case settings.KEYS.OFFER_ABOVE_BEST:
          plugin.offerAboveBest();
          break;

        // place offer at current best ask
        case settings.KEYS.OFFER_DOUBLE_ABOVE_BEST:
          plugin.offerDoubleAboveBest();
          break;

        // place limit order at the current bid price
        case settings.KEYS.HIT_THE_BID:
          plugin.hitTheBid();
          break;

        // place market sell
        case settings.KEYS.MARKET_SELL:
          plugin.marketSell();
          break;


        /********************************
         *      CANCEL ORDER KEYS
         ********************************/
        // cancel all bids
        case settings.KEYS.CANCEL_BIDS:
          plugin.cancelBids();
          break;

        // cancel all order
        case settings.KEYS.CANCEL_OFFERS:
          plugin.cancelOffers();
          break;

        // cancel last order
        case settings.KEYS.CANCEL_LAST:
          plugin.cancelLast();
          break;

        // cancel all order
        case settings.KEYS.CANCEL_ALL:
          plugin.cancelAll();
          break;

        default:
          console.log('Key: ', e.keyCode);
          break
      }
    });
  }

  function onKeypress(e){
    //console.log('Keyup', e);
  }

  function onKeyup(e){

  }


})();