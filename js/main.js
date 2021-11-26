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

  // show popup login
  var popupLogin = document.querySelector('.popup-login');
  var openPopupLogin = document.querySelectorAll('.open-login');
  var closePopupLogin = document.querySelector('.close-popup-login');

  // push up main
  var heightHeader = document.querySelector("#header");
  var headerLogoTop = document.querySelector(".header-logo-top");
  if(heightHeader){
    var prevTopHeader = heightHeader.offsetTop;
    var changeLogo = heightHeader.querySelector('.navbar--left__logo');
    main.style.marginTop ='-' + heightHeader.offsetHeight + 'px';
    headerLogoTop.style.background = heightHeader.querySelector('.header-bg').style.background;

  }
  // 


  // table of content when width <= 1024 
  var tableOfContent = document.querySelector('.table-of-content-field-mb');
  var isFixedMb = document.querySelector('.is-fixed-mb');
  
  //  full page
  var weekInPicture = document.querySelector('.week-wrapper');

  //show table of content week in picture
  var openTableOfContentWeek = document.querySelector('.count-stories');
  var tableOfContentWeek = document.querySelector('.week-table-of-content');
  var closeTableOfContentWeek = document.querySelector('.week-table-of-content__title');

  // show get deal detail
  var showGetDeal = document.querySelector('.get-deal-share-btn');
  var getDealForm = document.querySelector('.get-deal-form');

  // show candidate question 
  var showCandidateQuestion = document.querySelectorAll('.candidate-question-item');

  // footer
  var footerBlock = document.querySelector('footer');
  const app = {
    pushUpMain:function(){
      var currentTopHeader = heightHeader.offsetTop;
      if(heightHeader){
        var headerBg = heightHeader.querySelector('.header-bg');
      }
      if(currentTopHeader > prevTopHeader){
        headerBg.style.opacity = '0.5';
        headerBg.style.transition = "all 0.3s";
        changeLogo.style.transform = 'translateX(0)';
      }else{
        headerBg.style.opacity = '1';
        changeLogo.style.transform = 'translateX(-174px)';
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
          var iconSubMb = b.querySelector('.navbar-item__icon');
          b.onclick = function(){
             var subMenuActive = document.querySelector('.navbar-item-mb.active');
             var iconSubMb2 = document.querySelector('.navbar-item__icon.active');
            if(subMenuActive && iconSubMb2){

              if(b.classList.contains('active')){
                b.classList.remove('active');
                iconSubMb2.setAttribute('name','caret-down-outline');
                return false;
              }
              else {
                subMenuActive.classList.remove('active');
                iconSubMb2.classList.remove('active');
                iconSubMb2.setAttribute('name','caret-down-outline');
              }
              
            }
            
            b.classList.toggle('active');
            if(iconSubMb){
              if(iconSubMb.getAttribute('name') == 'caret-down-outline'){
                iconSubMb.classList.add('active');
                iconSubMb.setAttribute('name','caret-up-outline');
              }else {
                iconSubMb2.classList.remove('active');
                iconSubMb.setAttribute('name','caret-down-outline')
              }
            }
            
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

      //footer
      if(footerBlock){
        if(footerBlock.offsetWidth < 1025){
          var navbarFooter = footerBlock.querySelectorAll('.footer-right-navbar');
          navbarFooter.forEach(function(curr){
            var navbarIcon =  curr.querySelector('.footer-right-icon');
            var caretIcon = curr.querySelector('.footer-right-icon');
            navbarIcon.onclick = function(){
              if(curr.classList.contains('active')){
                curr.classList.remove('active');
              }else{
                curr.classList.add('active')
              }
              if(caretIcon.getAttribute('name') == 'caret-down-outline'){
                caretIcon.setAttribute('name','caret-up-outline')
              }else {
                caretIcon.setAttribute('name','caret-down-outline')
              }
            }
          })
        }
      } 

      // show popup login
      if(openPopupLogin){
        openPopupLogin.forEach(function(value){
          value.onclick = function(){
            popupLogin.style.display = 'block';
          }
        })
        if(closePopupLogin){
          closePopupLogin.onclick = function(){
            popupLogin.style.display = 'none';
          }
        }
      }

      // show get deal detail
      if(showGetDeal){
        showGetDeal.onclick =function(){
          if(getDealForm){
            getDealForm.classList.toggle('active')
          }
        }
      }

      // show candidate question
      if(showCandidateQuestion){
        showCandidateQuestion.forEach(function(el){
          el.onclick = function(){
            var elIcon = el.querySelector('.candidate-question-item-header__icon');
            if(this.classList.contains('active')){
              this.classList.remove('active');
              elIcon.setAttribute('name','arrow-up-outline')
            }else {
              this.classList.add('active');
              elIcon.setAttribute('name','chevron-up-outline')
            }
          }
        })
      }

      // hide cac element khi click ra ngoai
      document.addEventListener('click',function(e){
        // hide search header
        if(searchHeader){
          if(!searchHeader.contains(e.target) && !e.target.matches('.navbar--right__img')){
            searchHeader.classList.remove('show');
          }
        }
      })
    },
    // set width giao dien mb
    setWidthPointOfView:function(){
      var widthPointView = document.querySelector('.point-of-view');
      var widthOpeningPosition = document.querySelector('.opening-positions');
      if(widthPointView){
        if(widthPointView.offsetWidth < 576){
          var widthAuthor = widthPointView.querySelector('.point-of-view__left--author');
          if(widthAuthor){
            $(widthAuthor).slick({
              infinite: false,
              dots:true,
              arrows: false,
              slidesToShow: 1.2,
              slidesToScroll: 1
            });
          }
        }
      };
      if(widthOpeningPosition){
        if(widthOpeningPosition.offsetWidth < 576){
          var widthWork = widthOpeningPosition.querySelectorAll('.tab-pane-block-opening');
          if(widthWork){
            $(widthWork).slick({
              infinite: false,
              dots:true,
              arrows: false,
              slidesToShow: 1.2,
              slidesToScroll: 1
            });
          }
        }
      }
    },
    
    // slide banner top mb
    slideBannerTopMb:function(){
      $('.banner-top-mb').slick({
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
    // slide hot deal
    slideHotDeal:function(){
      $('.hot-deal-slide').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows:false,
              slidesToShow: 1.7,
              centerMode: true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1.2,
              arrows:false,
              infinite: false,
            }
          }
        ]
      });
    },
    // slide e magazine
    slideEmagazine:function(){
      $('.e-maga-content').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows:false,
              slidesToShow: 1.7,
              centerMode: true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              arrows:false,
              infinite: true,
            }
          }
        ]
      });
    },
    // slide week in picture
    slideWeekInPicture:function(){
      $('.week-in-picture-content').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows:true,
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              arrows:true,
              infinite: true,
            }
          }
        ]
      });
    },
    // slide hot deal detail
    slideHotDealDetail:function(){
      $('.hot-deal-slide-top').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              arrows:false,
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              arrows:false,
              infinite: true,
            }
          }
        ]
      });
    },
    // slide our team say
    slideOurTeamSay:function(){
      $('.our-team-content').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              centerMode: false,
            }
          }
        ]
      });
    },
    // slide top i am musing
    slideTopIMusing:function(){
      $('.top-i-am-musing-wrapper').slick({
        dots: false,
        infinite: false,
        arrows: true,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        draggable:false,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              draggable:true,
            }
          },
          {
            breakpoint: 740,
            settings: {
              slidesToShow: 1,
              draggable:true,
            }
          }
        ]
      });
    },
    // day content top detail
    pushTopDetail:function(){
      var heightBannerTopDetail = document.querySelector('.banner-top-detail');
      var heightNavbar = document.querySelector('.header');
      var detailCenterContent = document.querySelector('.detail-center-wrapper');
      var detailContentWrapper = document.querySelector('.detail-content-wrapper');
      if(detailContentWrapper){
        if(detailCenterContent){
          if(heightBannerTopDetail){
            if(heightBannerTopDetail.offsetWidth > 1024){
              detailCenterContent.style.marginTop = '-1' * (heightBannerTopDetail.offsetHeight - heightNavbar.offsetHeight -296) + "px";
            }
            if(heightBannerTopDetail.offsetWidth <= 1024 && heightBannerTopDetail.offsetWidth >= 740){
              detailCenterContent.style.marginTop = '-1' * (heightBannerTopDetail.offsetHeight - heightNavbar.offsetHeight -122) + "px";
            }
            if(heightBannerTopDetail.offsetWidth < 740){
              detailCenterContent.style.marginTop = '-1' * (heightBannerTopDetail.offsetHeight - heightNavbar.offsetHeight -69) + "px";
            }
            
          }else {
            detailCenterContent.style.marginTop = 20 + 'px';
            detailContentWrapper.style.marginTop = heightNavbar.offsetHeight + 'px';
          }
        }
      }
    },
    // table of content when width <= 1024 
    tableOfContents:function(){
      var scrollTopDetail = document.body.scrollTop || document.documentElement.scrollTop;
      if(scrollTopDetail && isFixedMb){
        if(scrollTopDetail >= (isFixedMb.offsetTop - heightHeader.offsetHeight)){
            tableOfContent.classList.add('isFixed');
            tableOfContent.style.top = heightHeader.offsetHeight + 'px';
            tableOfContent.onclick = function(){
              if(tableOfContent.classList.contains('isFixed')){
                tableOfContent.classList.toggle('is-show');
              }
            }
  
        }else {
          tableOfContent.classList.remove('isFixed')
        }
      }
    },
    // full page week picture
    fullpageWeek:function(){
      if(weekInPicture){
        var menuWeek = weekInPicture.querySelector('#menu-week');
        var menuWeekAnchors = Array.from(menuWeek.querySelectorAll('.menu-week-item')).map(function(value){
          return value.dataset.menuanchor
        });
        $('#fullpage-week').fullpage({
          licenseKey: true,
          sectionSelector: '.fullpage-week-item',
          autoScrolling:true,
          scrollHorizontally: true,
          navigation: true,
          anchors: menuWeekAnchors,
          menu: '#menu-week',
        });
        var fpNavActive = document.querySelectorAll('#fp-nav ul li a');
        fpNavActive.forEach(function(a,b){
          a.parentElement.parentElement.parentElement.classList.add('fpNav-custom')
          a.innerHTML = `${b} in ${fpNavActive.length - 2} stories <ion-icon name="chevron-up-outline" class="count-stories-icon"></ion-icon>`;
        })
        var fpNav = document.querySelector('.fpNav-custom');
        // table of content week in picture
        if(openTableOfContentWeek){
          openTableOfContentWeek.onclick = function(){
              tableOfContentWeek.classList.add('isShow');
              fpNav.style.display = 'none'
          }
          if(closeTableOfContentWeek){
            closeTableOfContentWeek.onclick = function(){
              tableOfContentWeek.classList.remove('isShow');
              fpNav.style.display = 'block'
            }
          }
        } 
      }
    },
    // window scroll
    windowScroll:function(){
      var _this = this;
      window.onscroll = function(){
        // lay chieu cao cua header va day main len 1 chut
        _this.pushUpMain();
        // table of content when width <= 1024 
        if(heightHeader){
          if(heightHeader.offsetWidth <= 1024){
            _this.tableOfContents();
          }
        }
        // 
      }
    },
    // khoi tao function start
    start: function () {
      // set img top banner header
      this.setImgTopHeader();
      // su ly cac su kien
      this.handleEvent();
      // slide banner top mb
      this.slideBannerTopMb();
      // set width tab line
      this.getTabWidth();
      // slide hot deal
      this.slideHotDeal();
      // slide emagazine
      this.slideEmagazine();
      // slide week in picture
      this.slideWeekInPicture();
      // slide hot deal detail
      this.slideHotDealDetail();
      // set width giao dien mb
      this.setWidthPointOfView();
      // day content top detail
      this.pushTopDetail();
      // window scroll
      this.windowScroll();
      // full page week picture
      this.fullpageWeek();
      //slide our team say
      this.slideOurTeamSay();
      // slide top i am musing
      this.slideTopIMusing();
    },
  };

  app.start();
});
