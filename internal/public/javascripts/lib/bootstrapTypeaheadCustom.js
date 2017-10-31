/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://getbootstrap.com/2.3.2/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



 /* =============================================================
  * Custom Typeahead for Teleflora Product and Search Suggestions
  * Customized for Teleflora, Inc.
  * By: Kevin Bleich for Big Spaceship, LLC
  * =============================================================
  * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.$menu = $(this.options.menu)
    this.searchResultTitles = this.options.searchResultTitles
    this.map = this.options.map
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , source: function (query, process) {

      var that = this
      $.get(pathToTypeAhead , function(data){/////////////////////////////////////
        that.searchResultTitles = []
        that.map = {}
        $.each(data.resultProducts, function(i, item){
          that.map[item.title] = {
            title : item.title
            ,image : domain + item.images.general[0]////////////////////////////////
            ,price : item.price.premium
            ,type : 'product'
          }
          that.searchResultTitles.push(item.title)
        })
        $.each(data.resultSuggestions, function(i, item){
          that.map[item.title] = {
            title : item.title
            ,type : 'suggestion'
          }
          that.searchResultTitles.push(item.title)
        })
      })

      $('.m-navbar').trigger('click')

      process(that.searchResultTitles)
    }

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      var type = this.$menu.find('.active').attr('data-type')
      this.$element
        .val(this.updater(val))
        .change()
      this.hide()
      if(type == 'product'){
        return window.location.href = '/batch2/pdp?' + val
      }
      else{
        return window.location.href = '/batch2/search-results?' + val
      }

    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element).show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {

      var items
       this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {

      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {

      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var listItem
      var regex = new RegExp( '(' + this.query + ')', 'gi' )
      var p = this.map[ item ]
      var itemTitle = p.title.replace( regex, "<span class='highlight'>$1</span>" )
      var type = p.type

      if(type == 'product'){
        listItem = "" +
            "<div class='m-search-ac-item-wrapper product'>" +
              "<img class='m-search-ac-products-item-image' src='" + p.image + "' />" +
              "<div class='m-search-ac-item-labels'>" +
                "<h3 class='m-search-ac-products-item-title product'>" + itemTitle + "</h3>" +
                "<div class='m-search-ac-products-item-price'>$" + p.price + "</div>" +
              "</div>" +
            "</div>" +
            "<div class='clear'></div>" +
            ""
      }
      else {
        listItem = "" +
            "<div class='m-search-ac-item-wrapper suggestion'>" +
              "<div class='m-search-ac-item-labels'>" +
                "<h3 class='m-search-ac-products-item-title suggestion'>" + itemTitle + "</h3>" +
              "</div>" +
            "</div>" +
            "<div class='clear'></div>" +
            ""
      }

      return listItem
    }

  , render: function (items) {
      var that = this
      var countProducts = 0
      var countSuggestions = 0

      items = $(items).map(function (i, item) {
        if(that.map[item].type == 'product') {
          countProducts++
        } else if (that.map[item].type == 'suggestion') {
          countSuggestions++
        }
        if(countSuggestions == 1){
          i = $(that.options.item).attr('data-value', item).attr('data-type', that.map[item].type).addClass('first-suggestion')
        }
        else {
          i = $(that.options.item).attr('data-value', item).attr('data-type', that.map[item].type)
        }

        i.html(that.highlighter(item))
        return i[0]
      })

      //items.first().addClass('active')
      var textProducts = countProducts == 1 ? ' Product' : ' Products'

      if(countSuggestions > 0 ){
        var textSuggestions = countSuggestions === 1 ? ' Suggestion' : ' Suggestions'
        $('head').append('<style>.first-suggestion:before{content:"'+countSuggestions+' '+textSuggestions+'"!important;}</style>')
      }

      $(this.$menu[0]).find('.m-search-ac-list.products').html(items)
      $(this.$menu[0]).find('.m-search-ac-header').html(countProducts + textProducts)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('.m-search-ac-list.products li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('.m-search-ac-list.products li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', '.m-search-ac-list li', $.proxy(this.mouseenter, this))
        .on('mouseleave', '.m-search-ac-list li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    searchResultTitles: []
  , map: {}
  , items: 10
  , item: '<li></li>'
  , minLength: 1
  , menu: "" +
          "<ul class='m-search-ac-dropdown'>" +
            "<li class='sli_ac_products m-search-ac-products'>" +
              "<h4 class='m-search-ac-header'></h4>" +
              "<ul class='m-search-ac-list products'></ul>" +
            "</li>" +
          "</ul>" +
          ""
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);
