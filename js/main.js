document.addEventListener("DOMContentLoaded", function () {
  // show search header
  var openSearchHeader = document.querySelector('.navbar--right__search');
  var searchHeader = document.querySelector('.search-header');

  //get image banner top header PC
  var getSrcBannerTopPc = document.querySelector('.banner-top-avatar__img');
  var getListBannerThumbPc = document.querySelector('.banner-top-thumb-list');
  
  // show menu mobile
  var openMenuMobile = document.querySelector('.navbar--right__bar');
  var menuMobile = document.querySelector('.menu-mb');
  var closeMenuMobile = document.querySelector('.close-menu-mb');

  // show sub menu mobile
  var openSubMenu = document.querySelectorAll('.navbar-item-mb');

  // click change tab
  var tabBlock = document.querySelectorAll('.tab-container');
  var tabs = document.querySelectorAll('.tabs');
  var tabLines = document.querySelectorAll('.tab-line');
  const app = {
    pushUpMain:function(){
      var heightHeader = document.querySelector("#header");
      var main = document.querySelector('#main');
      var prevTopHeader = heightHeader.offsetTop;
      var changeLogo = heightHeader.querySelector('.navbar--left__logo');
      // 
      main.style.marginTop ='-' + heightHeader.offsetHeight + 'px';
      window.onscroll = function(){
        var currentTopHeader = heightHeader.offsetTop;
        if(currentTopHeader > prevTopHeader){
          heightHeader.style.backgroundColor = '#0a0a0a59';
          heightHeader.style.transition = "all 0.3s";
          changeLogo.style.transform = 'translateX(0)';
        }else{
          heightHeader.style.backgroundColor = "#0a0a0a";
          changeLogo.style.transform = 'translateX(-174px)';
        }
      }
    },

    // set width tabs line
    getTabWidth:function(){
      if(tabs){
        tabs.forEach(function(c,index){
          var tabline = tabLines[index];
          tabline.style.width = c.scrollWidth + 'px';
        })
      }
    },

    // set img top banner header
    setImgTopHeader:function(){
      if(getListBannerThumbPc){
        var getImgAvatarAcitve = getListBannerThumbPc.querySelector('.banner-top-thumb.active');
        var getSrcImgActive =  getImgAvatarAcitve.querySelector('.banner-top-thumb__image');
        if(getSrcBannerTopPc){
          if(getSrcBannerTopPc.getAttribute('src')){
            getSrcBannerTopPc.setAttribute('src',getSrcImgActive.getAttribute('src'));
          }
        }
      }
    },


    // su ly cac su kien
    handleEvent: function () {
      const _this = this;
      

      // open search header
      if(openSearchHeader){
        openSearchHeader.onclick = function(){
          searchHeader.classList.toggle('show');
        }
      };


      // set img top banner PC when click
      if(getListBannerThumbPc){
        var getChildBannerThumbPc = getListBannerThumbPc.querySelectorAll('.banner-top-thumb');
        getChildBannerThumbPc.forEach(function(a){
          a.onclick = function(){
            var getChildBannerThumbPcActive = getListBannerThumbPc.querySelector('.banner-top-thumb.active');
            var getSrcChildImgThumb = a.querySelector('.banner-top-thumb__image');
            if(getSrcChildImgThumb){
              getSrcBannerTopPc.setAttribute('src',getSrcChildImgThumb.getAttribute('src'))
            }
            if(getChildBannerThumbPcActive){
              getChildBannerThumbPcActive.classList.remove('active')
            }
            a.classList.add('active');
          }
        })
      }

      // show menu mobile
      if(openMenuMobile){
        openMenuMobile.onclick = function(){
          menuMobile.classList.add('show')
        }
        if(closeMenuMobile){
          closeMenuMobile.onclick = function(){
            menuMobile.classList.remove('show')
          }
        }
      }

      // show sub menu mobile
      if(openSubMenu){
        openSubMenu.forEach(function(b){
          b.onclick = function(){
            b.classList.toggle('active')
          }
        })
      }


      // change tab on click
      if(tabBlock){
        tabBlock.forEach(function(tab){
          var tabItems = tab.querySelectorAll('.tab-item');
          var tabPanes = tab.querySelectorAll('.tab-pane');
          var tabLine = tab.querySelector('.tab-line');
          var tabActive = tab.querySelector('.tab-item.active');
          if(tabLine){
            tabLine.querySelector('.tab-line-child').style.left = tabActive.offsetLeft + 'px';
            tabLine.querySelector('.tab-line-child').style.width = tabActive.offsetWidth + 'px';
          }

          if(tabItems){
            tabItems.forEach(function(curr,index){
              curr.addEventListener('click',changeTab);
              var pane = tabPanes[index];
              function changeTab(){
                // 
                var tabItemActive = tab.querySelector('.tab-item.active');
                var tabPaneActive = tab.querySelector('.tab-pane.active');
                // 
                if(tabLine){
                  tabLine.querySelector('.tab-line-child').style.left = this.offsetLeft + 'px';
                  tabLine.querySelector('.tab-line-child').style.width = this.offsetWidth + 'px';
                }
                // 

                if(tabItemActive){
                  tabItemActive.classList.remove('active');
                }
                if(tabPaneActive){
                  tabPaneActive.classList.remove('active');
                }
                curr.classList.add('active');
                curr.scrollIntoView({behavior: "smooth",block:"nearest", inline: "center"});
                pane.classList.add('active');
              }
            })
          }
        })
      }


      // hide cac element khi click ra ngoai
      document.addEventListener('click',function(e){
        // hide search header
        if(!searchHeader.contains(e.target) && !e.target.matches('.navbar--right__img')){
          searchHeader.classList.remove('show');
        }
      })
    },

    // slide banner top mb
    slideBannerTopMb:function(){
      $('.banner-top-mb').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots:true,
        arrows: false,
        responsive: [
          {
            breakpoint: 739,
            settings: {
              arrows:true,
            }
          }
        ]
      });
    },

    // khoi tao function start
    start: function () {
      // lay chieu cao cua header va day main len 1 chut
      this.pushUpMain();
      // set img top banner header
      this.setImgTopHeader();
      // su ly cac su kien
      this.handleEvent();
      // slide banner top mb
      this.slideBannerTopMb();
      // set width tab line
      this.getTabWidth();
    },
  };

  app.start();
});
