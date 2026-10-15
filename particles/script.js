
particlesJS("particles-js", {
  "particles": {
    // 粒子の数
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },

    // 粒子の色
    "color": {
      "value": "#ffffff"
    },

    // 粒子の形
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },

    // 粒子の透明度
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },

    // 粒子の大きさ
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },

    // 粒子同士を線でつなぐ
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },

    // 粒子の動き
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },

  // マウス操作の設定
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      // マウスを近づけると線がつながる
      "onhover": {
        "enable": true,
        "mode": "grab"
      },

      // クリックすると粒子が追加される
      "onclick": {
        "enable": true,
        "mode": "push"
      },

      "resize": true
    },

    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },

  // Retinaディスプレイ対応
  "retina_detect": true
});
