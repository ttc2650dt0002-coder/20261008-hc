
particlesJS("particles-js", {
  "particles": {
    // ボタンの数
    
"number": {
  "value": 15,
  "density": {
    "enable": true,
    "value_area": 800
  }
},


    // ボタンの画像
    "shape": {
      "type": "image",
      "image": {
        "src": "img/button.png",
        "width": 100,
        "height": 100
      }
    },

    // 透明度
    "opacity": {
      "value": 0.9,
      "random": false,
      "anim": {
        "enable": false
      }
    },

    // ボタンの大きさ
   
"size": {
  "value": 50,
  "random": false,
  "anim": {
    "enable": false
  }
},


    // ボタン同士を線でつながない
    "line_linked": {
      "enable": false
    },

    // ふわふわ漂う動き
    "move": {
      "enable": true,
      "speed": 0.8,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false
      }
    }
  },

  // マウス操作
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },

  "retina_detect": true
});
