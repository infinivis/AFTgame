   // Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    var fps = 60.0;

function initInfo() {

      var canvas = document.getElementById("canvasInfo");
      var ctx = canvas.getContext("2d");

      fond(ctx);

      pression(ctx);

      humidite(ctx);

      temp(ctx);

      nbAbricotsSemaine(ctx);

      nbAbricotsJour(ctx);

      nbAbricotsCourant(ctx);

      nbPartie(ctx);

      time(ctx);

      warning(ctx);

      lkmInstant(ctx);

      lkmPic(ctx);

      lkmMoy(ctx);

      rkmInstant(ctx);

      rkmPic(ctx);

      rkmMoy(ctx);

      ecartNo(ctx);

      ecartMano(ctx);

      lMano(ctx);

      rMano(ctx);
    }

    function fond(ctx) {

      // fond
      ctx.drawImage(document.getElementById("image1"), 0.0, 0.0);
    }

    function pression(ctx) {

      // pression/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(pressionG, 994.8, 972.3);
      ctx.restore();
    }

    function humidite(ctx) {

      // humidite/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(humiditeG, 1025.7, 871.3);
      ctx.restore();
    }

    function temp(ctx) {

      // temp/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(tempG, 1025.7, 774.4);
      ctx.restore();
    }

    function nbAbricotsSemaine(ctx) {

      // nbAbricotsSemaine/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsSemaineG, 63.0, 969.3);
      ctx.restore();
    }

    function nbAbricotsJour(ctx) {

      // nbAbricotsJour/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsJourG, 62.0, 831.0);
      ctx.restore();
    }

    function nbAbricotsCourant(ctx) {

      // nbAbricotsCourant/kmh
      ctx.save();
      ctx.font = "150.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbAbricotsCourantG, 818.0, 858.9);
      ctx.restore();
    }

    function nbPartie(ctx) {

      // nbPartie/kmh
      ctx.save();
      ctx.font = "62.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(nbPartieG, 63.0, 121.3);
      ctx.restore();
    }

    function time(ctx) {

      // time/kmh
      ctx.save();
      ctx.font = "62.0px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText("01:59", 1110.1, 117.7); //timeG
      ctx.restore();
    }

    function warning(ctx) {

      // warning
      ctx.drawImage(document.getElementById("image2"), 455.5, 85.8);
    }

    function lkmInstant(ctx) {

      // lkmInstant/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmInstantG, 134.3, 408.2);
      ctx.restore();
    }

    function lkmPic(ctx) {

      // lkmPic/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmPicG, 62.6, 636.3);
      ctx.restore();
    }

    function lkmMoy(ctx) {

      // lkmMoy/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(lkmMoyG, 284.6, 636.3);
      ctx.restore();
    }

    function rkmInstant(ctx) {

      // rkmInstant/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmInstantG, 977.5, 407.9);
      ctx.restore();
    }

    function rkmPic(ctx) {

      // rkmPic/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmPicG, 796.5, 636.3);
      ctx.restore();
    }

    function rkmMoy(ctx) {

      // rkmMoy/kmh
      ctx.save();
      ctx.font = "62.4px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(rkmMoyG, 1018.5, 636.3);
      ctx.restore();
    }

    function ecartNo(ctx) {

      // ecartNo/kmh
      ctx.save();
      ctx.font = "109.9px 'Digital-7'";
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fillText(ecartNoG, 612.5, 408.3);
      ctx.restore();
    }

    function ecartMano(ctx) {

      // ecartMano/Groupe
      ctx.save();

      // ecartMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // ecartMano/Groupe/Trac transparent/Trac
      ctx.moveTo(639.7, 224.1);
      ctx.bezierCurveTo(552.8, 224.1, 482.3, 294.5, 482.3, 381.4);
      ctx.bezierCurveTo(482.3, 468.3, 552.8, 538.7, 639.7, 538.7);
      ctx.bezierCurveTo(726.5, 538.7, 797.0, 468.3, 797.0, 381.4);
      ctx.bezierCurveTo(797.0, 294.5, 726.5, 224.1, 639.7, 224.1);
      ctx.closePath();

      // ecartMano/Groupe/Trac transparent/Trac
      ctx.moveTo(639.7, 532.4);
      ctx.bezierCurveTo(556.2, 532.4, 488.6, 464.8, 488.6, 381.4);
      ctx.bezierCurveTo(488.6, 298.0, 556.2, 230.4, 639.7, 230.4);
      ctx.bezierCurveTo(723.1, 230.4, 790.7, 298.0, 790.7, 381.4);
      ctx.bezierCurveTo(790.7, 464.8, 723.1, 532.4, 639.7, 532.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // ecartMano/Groupe/Groupe

      // ecartMano/Groupe/Groupe/Trac
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(643.3, 267.4);
      ctx.lineTo(639.0, 267.4);
      ctx.lineTo(639.0, 242.4);
      ctx.lineTo(643.3, 242.4);
      ctx.lineTo(643.3, 267.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(649.2, 267.7);
      ctx.lineTo(644.9, 267.4);
      ctx.lineTo(646.2, 242.4);
      ctx.lineTo(650.6, 242.7);
      ctx.lineTo(649.2, 267.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(655.2, 268.2);
      ctx.lineTo(650.9, 267.8);
      ctx.lineTo(653.5, 242.9);
      ctx.lineTo(657.8, 243.3);
      ctx.lineTo(655.2, 268.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(661.1, 269.1);
      ctx.lineTo(656.8, 268.5);
      ctx.lineTo(660.7, 243.7);
      ctx.lineTo(665.0, 244.4);
      ctx.lineTo(661.1, 269.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(666.9, 270.3);
      ctx.lineTo(662.7, 269.4);
      ctx.lineTo(667.9, 244.9);
      ctx.lineTo(672.2, 245.8);
      ctx.lineTo(666.9, 270.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(672.7, 271.8);
      ctx.lineTo(668.5, 270.7);
      ctx.lineTo(675.0, 246.5);
      ctx.lineTo(679.2, 247.6);
      ctx.lineTo(672.7, 271.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(678.4, 273.6);
      ctx.lineTo(674.3, 272.3);
      ctx.lineTo(682.0, 248.5);
      ctx.lineTo(686.2, 249.8);
      ctx.lineTo(678.4, 273.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(684.0, 275.7);
      ctx.lineTo(680.0, 274.2);
      ctx.lineTo(688.9, 250.8);
      ctx.lineTo(693.0, 252.3);
      ctx.lineTo(684.0, 275.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(689.5, 278.1);
      ctx.lineTo(685.5, 276.4);
      ctx.lineTo(695.7, 253.5);
      ctx.lineTo(699.7, 255.2);
      ctx.lineTo(689.5, 278.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(694.8, 280.8);
      ctx.lineTo(691.0, 278.8);
      ctx.lineTo(702.3, 256.5);
      ctx.lineTo(706.2, 258.4);
      ctx.lineTo(694.8, 280.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(700.0, 283.7);
      ctx.lineTo(696.3, 281.6);
      ctx.lineTo(708.8, 259.9);
      ctx.lineTo(712.5, 262.0);
      ctx.lineTo(700.0, 283.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(705.0, 286.9);
      ctx.lineTo(701.4, 284.6);
      ctx.lineTo(715.1, 263.6);
      ctx.lineTo(718.7, 265.9);
      ctx.lineTo(705.0, 286.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(709.9, 290.4);
      ctx.lineTo(706.4, 287.9);
      ctx.lineTo(721.1, 267.6);
      ctx.lineTo(724.6, 270.1);
      ctx.lineTo(709.9, 290.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(714.6, 294.1);
      ctx.lineTo(711.2, 291.4);
      ctx.lineTo(727.0, 271.9);
      ctx.lineTo(730.3, 274.6);
      ctx.lineTo(714.6, 294.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(719.0, 298.1);
      ctx.lineTo(715.8, 295.2);
      ctx.lineTo(732.6, 276.6);
      ctx.lineTo(735.8, 279.5);
      ctx.lineTo(719.0, 298.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(723.3, 302.3);
      ctx.lineTo(720.2, 299.2);
      ctx.lineTo(738.0, 281.5);
      ctx.lineTo(741.0, 284.5);
      ctx.lineTo(723.3, 302.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(727.3, 306.7);
      ctx.lineTo(724.4, 303.5);
      ctx.lineTo(743.1, 286.7);
      ctx.lineTo(745.9, 289.9);
      ctx.lineTo(727.3, 306.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(731.1, 311.3);
      ctx.lineTo(728.4, 307.9);
      ctx.lineTo(747.9, 292.2);
      ctx.lineTo(750.6, 295.5);
      ctx.lineTo(731.1, 311.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(734.7, 316.1);
      ctx.lineTo(732.1, 312.6);
      ctx.lineTo(752.4, 297.9);
      ctx.lineTo(754.9, 301.4);
      ctx.lineTo(734.7, 316.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(738.0, 321.1);
      ctx.lineTo(735.6, 317.5);
      ctx.lineTo(756.6, 303.8);
      ctx.lineTo(759.0, 307.4);
      ctx.lineTo(738.0, 321.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(741.0, 326.2);
      ctx.lineTo(738.8, 322.5);
      ctx.lineTo(760.5, 310.0);
      ctx.lineTo(762.7, 313.7);
      ctx.lineTo(741.0, 326.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(743.7, 331.5);
      ctx.lineTo(741.7, 327.7);
      ctx.lineTo(764.1, 316.3);
      ctx.lineTo(766.1, 320.1);
      ctx.lineTo(743.7, 331.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(746.2, 336.9);
      ctx.lineTo(744.4, 333.0);
      ctx.lineTo(767.3, 322.8);
      ctx.lineTo(769.1, 326.8);
      ctx.lineTo(746.2, 336.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(748.4, 342.5);
      ctx.lineTo(746.8, 338.5);
      ctx.lineTo(770.2, 329.5);
      ctx.lineTo(771.8, 333.5);
      ctx.lineTo(748.4, 342.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(750.3, 348.2);
      ctx.lineTo(748.9, 344.1);
      ctx.lineTo(772.8, 336.3);
      ctx.lineTo(774.1, 340.4);
      ctx.lineTo(750.3, 348.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(751.9, 353.9);
      ctx.lineTo(750.7, 349.8);
      ctx.lineTo(774.9, 343.3);
      ctx.lineTo(776.1, 347.4);
      ctx.lineTo(751.9, 353.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(753.2, 359.7);
      ctx.lineTo(752.2, 355.5);
      ctx.lineTo(776.8, 350.3);
      ctx.lineTo(777.7, 354.5);
      ctx.lineTo(753.2, 359.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(754.2, 365.6);
      ctx.lineTo(753.4, 361.4);
      ctx.lineTo(778.2, 357.5);
      ctx.lineTo(778.9, 361.7);
      ctx.lineTo(754.2, 365.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(754.8, 371.6);
      ctx.lineTo(754.3, 367.3);
      ctx.lineTo(779.3, 364.7);
      ctx.lineTo(779.7, 368.9);
      ctx.lineTo(754.8, 371.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(755.2, 377.5);
      ctx.lineTo(754.9, 373.2);
      ctx.lineTo(780.0, 371.9);
      ctx.lineTo(780.2, 376.2);
      ctx.lineTo(755.2, 377.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(755.2, 383.5);
      ctx.lineTo(755.2, 379.2);
      ctx.lineTo(780.3, 379.2);
      ctx.lineTo(780.3, 383.5);
      ctx.lineTo(755.2, 383.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(755.0, 389.5);
      ctx.lineTo(755.1, 385.2);
      ctx.lineTo(780.2, 386.5);
      ctx.lineTo(780.0, 390.8);
      ctx.lineTo(755.0, 389.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(754.4, 395.4);
      ctx.lineTo(754.8, 391.1);
      ctx.lineTo(779.8, 393.8);
      ctx.lineTo(779.3, 398.0);
      ctx.lineTo(754.4, 395.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(753.5, 401.3);
      ctx.lineTo(754.1, 397.0);
      ctx.lineTo(778.9, 401.0);
      ctx.lineTo(778.2, 405.2);
      ctx.lineTo(753.5, 401.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(752.3, 407.2);
      ctx.lineTo(753.1, 402.9);
      ctx.lineTo(777.7, 408.2);
      ctx.lineTo(776.8, 412.4);
      ctx.lineTo(752.3, 407.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(750.8, 412.9);
      ctx.lineTo(751.9, 408.8);
      ctx.lineTo(776.1, 415.3);
      ctx.lineTo(775.0, 419.4);
      ctx.lineTo(750.8, 412.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(749.0, 418.6);
      ctx.lineTo(750.3, 414.5);
      ctx.lineTo(774.2, 422.3);
      ctx.lineTo(772.8, 426.4);
      ctx.lineTo(749.0, 418.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(746.9, 424.2);
      ctx.lineTo(748.4, 420.2);
      ctx.lineTo(771.8, 429.2);
      ctx.lineTo(770.3, 433.2);
      ctx.lineTo(746.9, 424.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(744.5, 429.7);
      ctx.lineTo(746.2, 425.7);
      ctx.lineTo(769.2, 436.0);
      ctx.lineTo(767.4, 439.9);
      ctx.lineTo(744.5, 429.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(741.8, 435.0);
      ctx.lineTo(743.7, 431.2);
      ctx.lineTo(766.1, 442.6);
      ctx.lineTo(764.2, 446.4);
      ctx.lineTo(741.8, 435.0);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(738.9, 440.2);
      ctx.lineTo(741.0, 436.5);
      ctx.lineTo(762.8, 449.0);
      ctx.lineTo(760.6, 452.8);
      ctx.lineTo(738.9, 440.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(735.7, 445.3);
      ctx.lineTo(738.0, 441.6);
      ctx.lineTo(759.1, 455.3);
      ctx.lineTo(756.7, 458.9);
      ctx.lineTo(735.7, 445.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(732.2, 450.1);
      ctx.lineTo(734.7, 446.6);
      ctx.lineTo(755.0, 461.4);
      ctx.lineTo(752.5, 464.8);
      ctx.lineTo(732.2, 450.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(728.5, 454.8);
      ctx.lineTo(731.2, 451.4);
      ctx.lineTo(750.7, 467.2);
      ctx.lineTo(748.0, 470.5);
      ctx.lineTo(728.5, 454.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(724.5, 459.3);
      ctx.lineTo(727.4, 456.0);
      ctx.lineTo(746.1, 472.8);
      ctx.lineTo(743.2, 476.0);
      ctx.lineTo(724.5, 459.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(720.4, 463.5);
      ctx.lineTo(723.4, 460.4);
      ctx.lineTo(741.1, 478.2);
      ctx.lineTo(738.1, 481.2);
      ctx.lineTo(720.4, 463.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(716.0, 467.5);
      ctx.lineTo(719.1, 464.6);
      ctx.lineTo(735.9, 483.3);
      ctx.lineTo(732.7, 486.1);
      ctx.lineTo(716.0, 467.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(711.3, 471.3);
      ctx.lineTo(714.7, 468.6);
      ctx.lineTo(730.5, 488.1);
      ctx.lineTo(727.1, 490.8);
      ctx.lineTo(711.3, 471.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(706.5, 474.9);
      ctx.lineTo(710.0, 472.3);
      ctx.lineTo(724.8, 492.7);
      ctx.lineTo(721.3, 495.1);
      ctx.lineTo(706.5, 474.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(701.5, 478.2);
      ctx.lineTo(705.2, 475.8);
      ctx.lineTo(718.8, 496.9);
      ctx.lineTo(715.2, 499.2);
      ctx.lineTo(701.5, 478.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(696.4, 481.2);
      ctx.lineTo(700.1, 479.0);
      ctx.lineTo(712.7, 500.8);
      ctx.lineTo(709.0, 502.9);
      ctx.lineTo(696.4, 481.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(691.1, 483.9);
      ctx.lineTo(694.9, 481.9);
      ctx.lineTo(706.3, 504.4);
      ctx.lineTo(702.5, 506.3);
      ctx.lineTo(691.1, 483.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(685.6, 486.4);
      ctx.lineTo(689.6, 484.6);
      ctx.lineTo(699.8, 507.6);
      ctx.lineTo(695.9, 509.3);
      ctx.lineTo(685.6, 486.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(680.1, 488.6);
      ctx.lineTo(684.1, 487.0);
      ctx.lineTo(693.1, 510.5);
      ctx.lineTo(689.1, 512.0);
      ctx.lineTo(680.1, 488.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(674.4, 490.5);
      ctx.lineTo(678.6, 489.1);
      ctx.lineTo(686.3, 513.0);
      ctx.lineTo(682.2, 514.3);
      ctx.lineTo(674.4, 490.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(668.7, 492.1);
      ctx.lineTo(672.9, 490.9);
      ctx.lineTo(679.4, 515.2);
      ctx.lineTo(675.2, 516.3);
      ctx.lineTo(668.7, 492.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(662.8, 493.3);
      ctx.lineTo(667.1, 492.4);
      ctx.lineTo(672.3, 517.0);
      ctx.lineTo(668.1, 517.9);
      ctx.lineTo(662.8, 493.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(657.0, 494.3);
      ctx.lineTo(661.3, 493.6);
      ctx.lineTo(665.2, 518.5);
      ctx.lineTo(660.9, 519.1);
      ctx.lineTo(657.0, 494.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(651.0, 495.0);
      ctx.lineTo(655.4, 494.5);
      ctx.lineTo(658.0, 519.5);
      ctx.lineTo(653.7, 520.0);
      ctx.lineTo(651.0, 495.0);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(645.1, 495.3);
      ctx.lineTo(649.4, 495.1);
      ctx.lineTo(650.7, 520.2);
      ctx.lineTo(646.4, 520.4);
      ctx.lineTo(645.1, 495.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(639.1, 495.4);
      ctx.lineTo(643.5, 495.4);
      ctx.lineTo(643.4, 520.5);
      ctx.lineTo(639.2, 520.5);
      ctx.lineTo(639.1, 495.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(633.1, 495.1);
      ctx.lineTo(637.5, 495.3);
      ctx.lineTo(636.2, 520.4);
      ctx.lineTo(631.9, 520.2);
      ctx.lineTo(633.1, 495.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(627.2, 494.6);
      ctx.lineTo(631.5, 495.0);
      ctx.lineTo(628.9, 520.0);
      ctx.lineTo(624.6, 519.5);
      ctx.lineTo(627.2, 494.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(621.3, 493.7);
      ctx.lineTo(625.6, 494.3);
      ctx.lineTo(621.7, 519.1);
      ctx.lineTo(617.4, 518.5);
      ctx.lineTo(621.3, 493.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(615.5, 492.5);
      ctx.lineTo(619.7, 493.3);
      ctx.lineTo(614.5, 517.9);
      ctx.lineTo(610.3, 517.0);
      ctx.lineTo(615.5, 492.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(609.7, 491.0);
      ctx.lineTo(613.9, 492.1);
      ctx.lineTo(607.4, 516.3);
      ctx.lineTo(603.2, 515.2);
      ctx.lineTo(609.7, 491.0);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(604.0, 489.2);
      ctx.lineTo(608.1, 490.5);
      ctx.lineTo(600.3, 514.4);
      ctx.lineTo(596.3, 513.1);
      ctx.lineTo(604.0, 489.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(598.4, 487.1);
      ctx.lineTo(602.5, 488.6);
      ctx.lineTo(593.5, 512.1);
      ctx.lineTo(589.5, 510.5);
      ctx.lineTo(598.4, 487.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(592.9, 484.7);
      ctx.lineTo(596.9, 486.4);
      ctx.lineTo(586.7, 509.4);
      ctx.lineTo(582.8, 507.6);
      ctx.lineTo(592.9, 484.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(587.6, 482.0);
      ctx.lineTo(591.5, 484.0);
      ctx.lineTo(580.0, 506.4);
      ctx.lineTo(576.3, 504.4);
      ctx.lineTo(587.6, 482.0);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(582.4, 479.1);
      ctx.lineTo(586.2, 481.2);
      ctx.lineTo(573.6, 503.0);
      ctx.lineTo(569.9, 500.9);
      ctx.lineTo(582.4, 479.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(577.4, 475.9);
      ctx.lineTo(581.0, 478.2);
      ctx.lineTo(567.3, 499.3);
      ctx.lineTo(563.7, 497.0);
      ctx.lineTo(577.4, 475.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(572.5, 472.4);
      ctx.lineTo(576.1, 474.9);
      ctx.lineTo(561.3, 495.3);
      ctx.lineTo(557.8, 492.7);
      ctx.lineTo(572.5, 472.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(567.8, 468.7);
      ctx.lineTo(571.2, 471.4);
      ctx.lineTo(555.4, 490.9);
      ctx.lineTo(552.1, 488.2);
      ctx.lineTo(567.8, 468.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(563.4, 464.7);
      ctx.lineTo(566.6, 467.6);
      ctx.lineTo(549.8, 486.3);
      ctx.lineTo(546.6, 483.4);
      ctx.lineTo(563.4, 464.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(559.1, 460.5);
      ctx.lineTo(562.2, 463.6);
      ctx.lineTo(544.4, 481.4);
      ctx.lineTo(541.4, 478.3);
      ctx.lineTo(559.1, 460.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(555.1, 456.1);
      ctx.lineTo(558.0, 459.3);
      ctx.lineTo(539.3, 476.2);
      ctx.lineTo(536.5, 473.0);
      ctx.lineTo(555.1, 456.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(551.3, 451.5);
      ctx.lineTo(554.0, 454.9);
      ctx.lineTo(534.5, 470.7);
      ctx.lineTo(531.8, 467.4);
      ctx.lineTo(551.3, 451.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(547.7, 446.7);
      ctx.lineTo(550.3, 450.2);
      ctx.lineTo(530.0, 465.0);
      ctx.lineTo(527.5, 461.5);
      ctx.lineTo(547.7, 446.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(544.4, 441.7);
      ctx.lineTo(546.8, 445.4);
      ctx.lineTo(525.8, 459.1);
      ctx.lineTo(523.5, 455.5);
      ctx.lineTo(544.4, 441.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(541.4, 436.6);
      ctx.lineTo(543.6, 440.3);
      ctx.lineTo(521.9, 452.9);
      ctx.lineTo(519.8, 449.2);
      ctx.lineTo(541.4, 436.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(538.7, 431.3);
      ctx.lineTo(540.7, 435.1);
      ctx.lineTo(518.3, 446.6);
      ctx.lineTo(516.4, 442.7);
      ctx.lineTo(538.7, 431.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(536.2, 425.9);
      ctx.lineTo(538.0, 429.8);
      ctx.lineTo(515.1, 440.0);
      ctx.lineTo(513.3, 436.1);
      ctx.lineTo(536.2, 425.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(534.0, 420.3);
      ctx.lineTo(535.6, 424.3);
      ctx.lineTo(512.2, 433.4);
      ctx.lineTo(510.6, 429.3);
      ctx.lineTo(534.0, 420.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(532.1, 414.6);
      ctx.lineTo(533.5, 418.7);
      ctx.lineTo(509.6, 426.5);
      ctx.lineTo(508.3, 422.4);
      ctx.lineTo(532.1, 414.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(530.5, 408.9);
      ctx.lineTo(531.7, 413.1);
      ctx.lineTo(507.4, 419.6);
      ctx.lineTo(506.4, 415.4);
      ctx.lineTo(530.5, 408.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(529.3, 403.1);
      ctx.lineTo(530.2, 407.3);
      ctx.lineTo(505.6, 412.5);
      ctx.lineTo(504.7, 408.3);
      ctx.lineTo(529.3, 403.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(528.3, 397.2);
      ctx.lineTo(529.0, 401.4);
      ctx.lineTo(504.2, 405.4);
      ctx.lineTo(503.5, 401.1);
      ctx.lineTo(528.3, 397.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(527.6, 391.2);
      ctx.lineTo(528.1, 395.5);
      ctx.lineTo(503.1, 398.2);
      ctx.lineTo(502.7, 393.9);
      ctx.lineTo(527.6, 391.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(527.3, 385.3);
      ctx.lineTo(527.5, 389.6);
      ctx.lineTo(502.4, 390.9);
      ctx.lineTo(502.2, 386.7);
      ctx.lineTo(527.3, 385.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(527.2, 379.3);
      ctx.lineTo(527.2, 383.6);
      ctx.lineTo(502.1, 383.7);
      ctx.lineTo(502.1, 379.4);
      ctx.lineTo(527.2, 379.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(527.5, 373.4);
      ctx.lineTo(527.3, 377.7);
      ctx.lineTo(502.2, 376.4);
      ctx.lineTo(502.4, 372.1);
      ctx.lineTo(527.5, 373.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(528.0, 367.4);
      ctx.lineTo(527.6, 371.7);
      ctx.lineTo(502.7, 369.1);
      ctx.lineTo(503.1, 364.9);
      ctx.lineTo(528.0, 367.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(528.9, 361.5);
      ctx.lineTo(528.3, 365.8);
      ctx.lineTo(503.5, 361.9);
      ctx.lineTo(504.2, 357.6);
      ctx.lineTo(528.9, 361.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(530.1, 355.7);
      ctx.lineTo(529.2, 359.9);
      ctx.lineTo(504.7, 354.7);
      ctx.lineTo(505.6, 350.5);
      ctx.lineTo(530.1, 355.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(531.6, 349.9);
      ctx.lineTo(530.5, 354.0);
      ctx.lineTo(506.3, 347.6);
      ctx.lineTo(507.4, 343.5);
      ctx.lineTo(531.6, 349.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(533.4, 344.2);
      ctx.lineTo(532.1, 348.3);
      ctx.lineTo(508.2, 340.6);
      ctx.lineTo(509.6, 336.5);
      ctx.lineTo(533.4, 344.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(535.5, 338.6);
      ctx.lineTo(534.0, 342.6);
      ctx.lineTo(510.6, 333.7);
      ctx.lineTo(512.1, 329.7);
      ctx.lineTo(535.5, 338.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(537.9, 333.1);
      ctx.lineTo(536.2, 337.0);
      ctx.lineTo(513.2, 326.9);
      ctx.lineTo(515.0, 323.0);
      ctx.lineTo(537.9, 333.1);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(540.6, 327.8);
      ctx.lineTo(538.6, 331.6);
      ctx.lineTo(516.3, 320.3);
      ctx.lineTo(518.2, 316.5);
      ctx.lineTo(540.6, 327.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(543.5, 322.6);
      ctx.lineTo(541.4, 326.3);
      ctx.lineTo(519.6, 313.8);
      ctx.lineTo(521.8, 310.1);
      ctx.lineTo(543.5, 322.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(546.7, 317.6);
      ctx.lineTo(544.4, 321.2);
      ctx.lineTo(523.3, 307.6);
      ctx.lineTo(525.7, 304.0);
      ctx.lineTo(546.7, 317.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(550.2, 312.7);
      ctx.lineTo(547.7, 316.2);
      ctx.lineTo(527.4, 301.5);
      ctx.lineTo(529.9, 298.0);
      ctx.lineTo(550.2, 312.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(553.9, 308.0);
      ctx.lineTo(551.2, 311.4);
      ctx.lineTo(531.7, 295.7);
      ctx.lineTo(534.4, 292.3);
      ctx.lineTo(553.9, 308.0);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(557.9, 303.6);
      ctx.lineTo(555.0, 306.8);
      ctx.lineTo(536.3, 290.0);
      ctx.lineTo(539.2, 286.9);
      ctx.lineTo(557.9, 303.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(562.1, 299.3);
      ctx.lineTo(559.0, 302.4);
      ctx.lineTo(541.3, 284.7);
      ctx.lineTo(544.3, 281.7);
      ctx.lineTo(562.1, 299.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(566.5, 295.3);
      ctx.lineTo(563.3, 298.2);
      ctx.lineTo(546.5, 279.6);
      ctx.lineTo(549.7, 276.7);
      ctx.lineTo(566.5, 295.3);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(571.1, 291.5);
      ctx.lineTo(567.7, 294.2);
      ctx.lineTo(551.9, 274.8);
      ctx.lineTo(555.3, 272.1);
      ctx.lineTo(571.1, 291.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(575.9, 287.9);
      ctx.lineTo(572.4, 290.5);
      ctx.lineTo(557.7, 270.2);
      ctx.lineTo(561.1, 267.7);
      ctx.lineTo(575.9, 287.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(580.9, 284.7);
      ctx.lineTo(577.2, 287.0);
      ctx.lineTo(563.6, 266.0);
      ctx.lineTo(567.2, 263.7);
      ctx.lineTo(580.9, 284.7);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(586.0, 281.6);
      ctx.lineTo(582.3, 283.8);
      ctx.lineTo(569.7, 262.1);
      ctx.lineTo(573.5, 260.0);
      ctx.lineTo(586.0, 281.6);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(591.3, 278.9);
      ctx.lineTo(587.4, 280.9);
      ctx.lineTo(576.1, 258.5);
      ctx.lineTo(579.9, 256.6);
      ctx.lineTo(591.3, 278.9);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(596.8, 276.4);
      ctx.lineTo(592.8, 278.2);
      ctx.lineTo(582.6, 255.3);
      ctx.lineTo(586.5, 253.5);
      ctx.lineTo(596.8, 276.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(602.3, 274.2);
      ctx.lineTo(598.2, 275.8);
      ctx.lineTo(589.3, 252.4);
      ctx.lineTo(593.3, 250.8);
      ctx.lineTo(602.3, 274.2);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(608.0, 272.4);
      ctx.lineTo(603.8, 273.7);
      ctx.lineTo(596.1, 249.9);
      ctx.lineTo(600.2, 248.5);
      ctx.lineTo(608.0, 272.4);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(613.7, 270.8);
      ctx.lineTo(609.5, 271.9);
      ctx.lineTo(603.1, 247.7);
      ctx.lineTo(607.2, 246.6);
      ctx.lineTo(613.7, 270.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(619.6, 269.5);
      ctx.lineTo(615.3, 270.4);
      ctx.lineTo(610.1, 245.9);
      ctx.lineTo(614.3, 245.0);
      ctx.lineTo(619.6, 269.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(625.5, 268.5);
      ctx.lineTo(621.2, 269.1);
      ctx.lineTo(617.2, 244.4);
      ctx.lineTo(621.5, 243.7);
      ctx.lineTo(625.5, 268.5);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(631.4, 267.8);
      ctx.lineTo(627.1, 268.3);
      ctx.lineTo(624.4, 243.4);
      ctx.lineTo(628.7, 242.9);
      ctx.lineTo(631.4, 267.8);
      ctx.closePath();
      ctx.fill();

      // ecartMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(637.3, 267.5);
      ctx.lineTo(633.0, 267.7);
      ctx.lineTo(631.7, 242.7);
      ctx.lineTo(636.0, 242.4);
      ctx.lineTo(637.3, 267.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }

    function lMano(ctx) {

      // lMano/Groupe
      ctx.save();

      // lMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // lMano/Groupe/Trac transparent/Trac
      ctx.moveTo(217.1, 224.4);
      ctx.bezierCurveTo(130.2, 224.4, 59.7, 294.8, 59.7, 381.7);
      ctx.bezierCurveTo(59.7, 468.6, 130.2, 539.0, 217.1, 539.0);
      ctx.bezierCurveTo(304.0, 539.0, 374.4, 468.6, 374.4, 381.7);
      ctx.bezierCurveTo(374.4, 294.8, 304.0, 224.4, 217.1, 224.4);
      ctx.closePath();

      // lMano/Groupe/Trac transparent/Trac
      ctx.moveTo(217.1, 532.7);
      ctx.bezierCurveTo(133.7, 532.7, 66.0, 465.1, 66.0, 381.7);
      ctx.bezierCurveTo(66.0, 298.3, 133.7, 230.7, 217.1, 230.7);
      ctx.bezierCurveTo(300.5, 230.7, 368.1, 298.3, 368.1, 381.7);
      ctx.bezierCurveTo(368.1, 465.1, 300.5, 532.7, 217.1, 532.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // lMano/Groupe/Groupe

      // lMano/Groupe/Groupe/Trac
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(220.7, 267.7);
      ctx.lineTo(216.4, 267.7);
      ctx.lineTo(216.4, 242.7);
      ctx.lineTo(220.7, 242.7);
      ctx.lineTo(220.7, 267.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(226.7, 267.9);
      ctx.lineTo(222.3, 267.7);
      ctx.lineTo(223.6, 242.7);
      ctx.lineTo(228.0, 242.9);
      ctx.lineTo(226.7, 267.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(232.6, 268.5);
      ctx.lineTo(228.3, 268.1);
      ctx.lineTo(230.9, 243.2);
      ctx.lineTo(235.2, 243.6);
      ctx.lineTo(232.6, 268.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(238.5, 269.4);
      ctx.lineTo(234.2, 268.7);
      ctx.lineTo(238.1, 244.0);
      ctx.lineTo(242.4, 244.7);
      ctx.lineTo(238.5, 269.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(244.4, 270.6);
      ctx.lineTo(240.1, 269.7);
      ctx.lineTo(245.3, 245.2);
      ctx.lineTo(249.6, 246.1);
      ctx.lineTo(244.4, 270.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(250.1, 272.1);
      ctx.lineTo(246.0, 271.0);
      ctx.lineTo(252.4, 246.8);
      ctx.lineTo(256.6, 247.9);
      ctx.lineTo(250.1, 272.1);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(255.8, 273.9);
      ctx.lineTo(251.7, 272.6);
      ctx.lineTo(259.4, 248.7);
      ctx.lineTo(263.6, 250.1);
      ctx.lineTo(255.8, 273.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(261.4, 276.0);
      ctx.lineTo(257.4, 274.5);
      ctx.lineTo(266.3, 251.1);
      ctx.lineTo(270.4, 252.6);
      ctx.lineTo(261.4, 276.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(266.9, 278.4);
      ctx.lineTo(262.9, 276.7);
      ctx.lineTo(273.1, 253.7);
      ctx.lineTo(277.1, 255.5);
      ctx.lineTo(266.9, 278.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(272.2, 281.1);
      ctx.lineTo(268.4, 279.1);
      ctx.lineTo(279.7, 256.8);
      ctx.lineTo(283.6, 258.7);
      ctx.lineTo(272.2, 281.1);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(277.4, 284.0);
      ctx.lineTo(273.7, 281.9);
      ctx.lineTo(286.2, 260.1);
      ctx.lineTo(289.9, 262.3);
      ctx.lineTo(277.4, 284.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(282.5, 287.2);
      ctx.lineTo(278.8, 284.9);
      ctx.lineTo(292.5, 263.8);
      ctx.lineTo(296.1, 266.2);
      ctx.lineTo(282.5, 287.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(287.3, 290.7);
      ctx.lineTo(283.8, 288.2);
      ctx.lineTo(298.5, 267.9);
      ctx.lineTo(302.0, 270.4);
      ctx.lineTo(287.3, 290.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(292.0, 294.4);
      ctx.lineTo(288.6, 291.7);
      ctx.lineTo(304.4, 272.2);
      ctx.lineTo(307.7, 274.9);
      ctx.lineTo(292.0, 294.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(296.5, 298.4);
      ctx.lineTo(293.2, 295.5);
      ctx.lineTo(310.0, 276.8);
      ctx.lineTo(313.2, 279.7);
      ctx.lineTo(296.5, 298.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(300.7, 302.6);
      ctx.lineTo(297.6, 299.5);
      ctx.lineTo(315.4, 281.8);
      ctx.lineTo(318.4, 284.8);
      ctx.lineTo(300.7, 302.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(304.7, 307.0);
      ctx.lineTo(301.8, 303.8);
      ctx.lineTo(320.5, 287.0);
      ctx.lineTo(323.4, 290.2);
      ctx.lineTo(304.7, 307.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(308.5, 311.6);
      ctx.lineTo(305.8, 308.2);
      ctx.lineTo(325.3, 292.4);
      ctx.lineTo(328.0, 295.8);
      ctx.lineTo(308.5, 311.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(312.1, 316.4);
      ctx.lineTo(309.5, 312.9);
      ctx.lineTo(329.8, 298.1);
      ctx.lineTo(332.4, 301.6);
      ctx.lineTo(312.1, 316.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(315.4, 321.4);
      ctx.lineTo(313.0, 317.7);
      ctx.lineTo(334.0, 304.1);
      ctx.lineTo(336.4, 307.7);
      ctx.lineTo(315.4, 321.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(318.4, 326.5);
      ctx.lineTo(316.2, 322.8);
      ctx.lineTo(337.9, 310.2);
      ctx.lineTo(340.1, 314.0);
      ctx.lineTo(318.4, 326.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(321.1, 331.8);
      ctx.lineTo(319.2, 328.0);
      ctx.lineTo(341.5, 316.6);
      ctx.lineTo(343.5, 320.4);
      ctx.lineTo(321.1, 331.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(323.6, 337.2);
      ctx.lineTo(321.8, 333.3);
      ctx.lineTo(344.7, 323.1);
      ctx.lineTo(346.5, 327.0);
      ctx.lineTo(323.6, 337.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(325.8, 342.8);
      ctx.lineTo(324.2, 338.8);
      ctx.lineTo(347.6, 329.8);
      ctx.lineTo(349.2, 333.8);
      ctx.lineTo(325.8, 342.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(327.7, 348.4);
      ctx.lineTo(326.3, 344.3);
      ctx.lineTo(350.2, 336.6);
      ctx.lineTo(351.5, 340.7);
      ctx.lineTo(327.7, 348.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(329.3, 354.2);
      ctx.lineTo(328.1, 350.0);
      ctx.lineTo(352.4, 343.5);
      ctx.lineTo(353.5, 347.7);
      ctx.lineTo(329.3, 354.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(330.6, 360.0);
      ctx.lineTo(329.6, 355.8);
      ctx.lineTo(354.2, 350.6);
      ctx.lineTo(355.1, 354.8);
      ctx.lineTo(330.6, 360.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(331.6, 365.9);
      ctx.lineTo(330.9, 361.7);
      ctx.lineTo(355.6, 357.7);
      ctx.lineTo(356.3, 362.0);
      ctx.lineTo(331.6, 365.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(332.2, 371.8);
      ctx.lineTo(331.7, 367.6);
      ctx.lineTo(356.7, 365.0);
      ctx.lineTo(357.1, 369.2);
      ctx.lineTo(332.2, 371.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(332.6, 377.8);
      ctx.lineTo(332.3, 373.5);
      ctx.lineTo(357.4, 372.2);
      ctx.lineTo(357.6, 376.5);
      ctx.lineTo(332.6, 377.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(332.6, 383.8);
      ctx.lineTo(332.6, 379.5);
      ctx.lineTo(357.7, 379.5);
      ctx.lineTo(357.7, 383.8);
      ctx.lineTo(332.6, 383.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(332.4, 389.7);
      ctx.lineTo(332.5, 385.4);
      ctx.lineTo(357.6, 386.8);
      ctx.lineTo(357.4, 391.0);
      ctx.lineTo(332.4, 389.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(331.8, 395.7);
      ctx.lineTo(332.2, 391.4);
      ctx.lineTo(357.2, 394.0);
      ctx.lineTo(356.7, 398.3);
      ctx.lineTo(331.8, 395.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(330.9, 401.6);
      ctx.lineTo(331.5, 397.3);
      ctx.lineTo(356.3, 401.3);
      ctx.lineTo(355.6, 405.5);
      ctx.lineTo(330.9, 401.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(329.7, 407.4);
      ctx.lineTo(330.5, 403.2);
      ctx.lineTo(355.1, 408.5);
      ctx.lineTo(354.2, 412.6);
      ctx.lineTo(329.7, 407.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(328.2, 413.2);
      ctx.lineTo(329.3, 409.1);
      ctx.lineTo(353.5, 415.6);
      ctx.lineTo(352.4, 419.7);
      ctx.lineTo(328.2, 413.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(326.4, 418.9);
      ctx.lineTo(327.7, 414.8);
      ctx.lineTo(351.6, 422.6);
      ctx.lineTo(350.2, 426.7);
      ctx.lineTo(326.4, 418.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(324.3, 424.5);
      ctx.lineTo(325.8, 420.5);
      ctx.lineTo(349.2, 429.5);
      ctx.lineTo(347.7, 433.5);
      ctx.lineTo(324.3, 424.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(321.9, 430.0);
      ctx.lineTo(323.6, 426.0);
      ctx.lineTo(346.6, 436.3);
      ctx.lineTo(344.8, 440.2);
      ctx.lineTo(321.9, 430.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(319.3, 435.3);
      ctx.lineTo(321.1, 431.5);
      ctx.lineTo(343.6, 442.9);
      ctx.lineTo(341.6, 446.7);
      ctx.lineTo(319.3, 435.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(316.3, 440.5);
      ctx.lineTo(318.4, 436.8);
      ctx.lineTo(340.2, 449.3);
      ctx.lineTo(338.0, 453.0);
      ctx.lineTo(316.3, 440.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(313.1, 445.5);
      ctx.lineTo(315.4, 441.9);
      ctx.lineTo(336.5, 455.6);
      ctx.lineTo(334.1, 459.2);
      ctx.lineTo(313.1, 445.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(309.6, 450.4);
      ctx.lineTo(312.1, 446.9);
      ctx.lineTo(332.5, 461.7);
      ctx.lineTo(329.9, 465.1);
      ctx.lineTo(309.6, 450.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(305.9, 455.1);
      ctx.lineTo(308.6, 451.7);
      ctx.lineTo(328.1, 467.5);
      ctx.lineTo(325.4, 470.8);
      ctx.lineTo(305.9, 455.1);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(302.0, 459.5);
      ctx.lineTo(304.8, 456.3);
      ctx.lineTo(323.5, 473.1);
      ctx.lineTo(320.6, 476.3);
      ctx.lineTo(302.0, 459.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(297.8, 463.8);
      ctx.lineTo(300.8, 460.7);
      ctx.lineTo(318.5, 478.5);
      ctx.lineTo(315.5, 481.5);
      ctx.lineTo(297.8, 463.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(293.4, 467.8);
      ctx.lineTo(296.5, 464.9);
      ctx.lineTo(313.3, 483.6);
      ctx.lineTo(310.1, 486.4);
      ctx.lineTo(293.4, 467.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(288.8, 471.6);
      ctx.lineTo(292.1, 468.8);
      ctx.lineTo(307.9, 488.4);
      ctx.lineTo(304.5, 491.1);
      ctx.lineTo(288.8, 471.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(283.9, 475.2);
      ctx.lineTo(287.4, 472.6);
      ctx.lineTo(302.2, 492.9);
      ctx.lineTo(298.7, 495.4);
      ctx.lineTo(283.9, 475.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(279.0, 478.4);
      ctx.lineTo(282.6, 476.0);
      ctx.lineTo(296.2, 497.2);
      ctx.lineTo(292.6, 499.5);
      ctx.lineTo(279.0, 478.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(273.8, 481.5);
      ctx.lineTo(277.5, 479.3);
      ctx.lineTo(290.1, 501.1);
      ctx.lineTo(286.4, 503.2);
      ctx.lineTo(273.8, 481.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(268.5, 484.2);
      ctx.lineTo(272.4, 482.2);
      ctx.lineTo(283.7, 504.6);
      ctx.lineTo(279.9, 506.6);
      ctx.lineTo(268.5, 484.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(263.0, 486.7);
      ctx.lineTo(267.0, 484.9);
      ctx.lineTo(277.2, 507.9);
      ctx.lineTo(273.3, 509.6);
      ctx.lineTo(263.0, 486.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(257.5, 488.9);
      ctx.lineTo(261.5, 487.3);
      ctx.lineTo(270.5, 510.8);
      ctx.lineTo(266.5, 512.3);
      ctx.lineTo(257.5, 488.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(251.8, 490.8);
      ctx.lineTo(256.0, 489.4);
      ctx.lineTo(263.7, 513.3);
      ctx.lineTo(259.6, 514.6);
      ctx.lineTo(251.8, 490.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(246.1, 492.3);
      ctx.lineTo(250.3, 491.2);
      ctx.lineTo(256.8, 515.5);
      ctx.lineTo(252.6, 516.6);
      ctx.lineTo(246.1, 492.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(240.3, 493.6);
      ctx.lineTo(244.5, 492.7);
      ctx.lineTo(249.7, 517.3);
      ctx.lineTo(245.5, 518.2);
      ctx.lineTo(240.3, 493.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(234.4, 494.6);
      ctx.lineTo(238.7, 493.9);
      ctx.lineTo(242.6, 518.7);
      ctx.lineTo(238.4, 519.4);
      ctx.lineTo(234.4, 494.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(228.4, 495.3);
      ctx.lineTo(232.8, 494.8);
      ctx.lineTo(235.4, 519.8);
      ctx.lineTo(231.1, 520.3);
      ctx.lineTo(228.4, 495.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(222.5, 495.6);
      ctx.lineTo(226.8, 495.4);
      ctx.lineTo(228.1, 520.5);
      ctx.lineTo(223.9, 520.7);
      ctx.lineTo(222.5, 495.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(216.5, 495.7);
      ctx.lineTo(220.9, 495.7);
      ctx.lineTo(220.8, 520.8);
      ctx.lineTo(216.6, 520.8);
      ctx.lineTo(216.5, 495.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(210.5, 495.4);
      ctx.lineTo(214.9, 495.6);
      ctx.lineTo(213.6, 520.7);
      ctx.lineTo(209.3, 520.5);
      ctx.lineTo(210.5, 495.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(204.6, 494.8);
      ctx.lineTo(209.0, 495.3);
      ctx.lineTo(206.3, 520.3);
      ctx.lineTo(202.1, 519.8);
      ctx.lineTo(204.6, 494.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(198.7, 493.9);
      ctx.lineTo(203.0, 494.6);
      ctx.lineTo(199.1, 519.4);
      ctx.lineTo(194.8, 518.7);
      ctx.lineTo(198.7, 493.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(192.9, 492.8);
      ctx.lineTo(197.1, 493.6);
      ctx.lineTo(191.9, 518.2);
      ctx.lineTo(187.7, 517.3);
      ctx.lineTo(192.9, 492.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(187.1, 491.3);
      ctx.lineTo(191.3, 492.4);
      ctx.lineTo(184.8, 516.6);
      ctx.lineTo(180.6, 515.5);
      ctx.lineTo(187.1, 491.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(181.4, 489.5);
      ctx.lineTo(185.5, 490.8);
      ctx.lineTo(177.8, 514.7);
      ctx.lineTo(173.7, 513.4);
      ctx.lineTo(181.4, 489.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(175.8, 487.4);
      ctx.lineTo(179.9, 488.9);
      ctx.lineTo(170.9, 512.4);
      ctx.lineTo(166.9, 510.8);
      ctx.lineTo(175.8, 487.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(170.3, 485.0);
      ctx.lineTo(174.3, 486.7);
      ctx.lineTo(164.1, 509.7);
      ctx.lineTo(160.2, 507.9);
      ctx.lineTo(170.3, 485.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(165.0, 482.3);
      ctx.lineTo(168.9, 484.2);
      ctx.lineTo(157.5, 506.6);
      ctx.lineTo(153.7, 504.7);
      ctx.lineTo(165.0, 482.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(159.8, 479.4);
      ctx.lineTo(163.6, 481.5);
      ctx.lineTo(151.0, 503.3);
      ctx.lineTo(147.3, 501.1);
      ctx.lineTo(159.8, 479.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(154.8, 476.2);
      ctx.lineTo(158.4, 478.5);
      ctx.lineTo(144.7, 499.6);
      ctx.lineTo(141.2, 497.2);
      ctx.lineTo(154.8, 476.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(149.9, 472.7);
      ctx.lineTo(153.5, 475.2);
      ctx.lineTo(138.7, 495.6);
      ctx.lineTo(135.2, 493.0);
      ctx.lineTo(149.9, 472.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(145.2, 469.0);
      ctx.lineTo(148.7, 471.7);
      ctx.lineTo(132.8, 491.2);
      ctx.lineTo(129.5, 488.5);
      ctx.lineTo(145.2, 469.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(140.8, 465.0);
      ctx.lineTo(144.1, 467.9);
      ctx.lineTo(127.2, 486.6);
      ctx.lineTo(124.0, 483.7);
      ctx.lineTo(140.8, 465.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(136.5, 460.8);
      ctx.lineTo(139.6, 463.9);
      ctx.lineTo(121.8, 481.6);
      ctx.lineTo(118.8, 478.6);
      ctx.lineTo(136.5, 460.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(132.5, 456.4);
      ctx.lineTo(135.4, 459.6);
      ctx.lineTo(116.7, 476.4);
      ctx.lineTo(113.9, 473.3);
      ctx.lineTo(132.5, 456.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(128.7, 451.8);
      ctx.lineTo(131.5, 455.2);
      ctx.lineTo(111.9, 471.0);
      ctx.lineTo(109.3, 467.6);
      ctx.lineTo(128.7, 451.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(125.1, 447.0);
      ctx.lineTo(127.7, 450.5);
      ctx.lineTo(107.4, 465.3);
      ctx.lineTo(104.9, 461.8);
      ctx.lineTo(125.1, 447.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(121.9, 442.0);
      ctx.lineTo(124.3, 445.6);
      ctx.lineTo(103.2, 459.3);
      ctx.lineTo(100.9, 455.7);
      ctx.lineTo(121.9, 442.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(118.8, 436.9);
      ctx.lineTo(121.0, 440.6);
      ctx.lineTo(99.3, 453.2);
      ctx.lineTo(97.2, 449.5);
      ctx.lineTo(118.8, 436.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(116.1, 431.6);
      ctx.lineTo(118.1, 435.4);
      ctx.lineTo(95.7, 446.8);
      ctx.lineTo(93.8, 443.0);
      ctx.lineTo(116.1, 431.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(113.6, 426.2);
      ctx.lineTo(115.4, 430.1);
      ctx.lineTo(92.5, 440.3);
      ctx.lineTo(90.7, 436.4);
      ctx.lineTo(113.6, 426.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(111.4, 420.6);
      ctx.lineTo(113.0, 424.6);
      ctx.lineTo(89.6, 433.6);
      ctx.lineTo(88.1, 429.6);
      ctx.lineTo(111.4, 420.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(109.5, 414.9);
      ctx.lineTo(110.9, 419.0);
      ctx.lineTo(87.0, 426.8);
      ctx.lineTo(85.7, 422.7);
      ctx.lineTo(109.5, 414.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(108.0, 409.2);
      ctx.lineTo(109.1, 413.3);
      ctx.lineTo(84.9, 419.9);
      ctx.lineTo(83.8, 415.7);
      ctx.lineTo(108.0, 409.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(106.7, 403.3);
      ctx.lineTo(107.6, 407.6);
      ctx.lineTo(83.0, 412.8);
      ctx.lineTo(82.2, 408.6);
      ctx.lineTo(106.7, 403.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(105.7, 397.5);
      ctx.lineTo(106.4, 401.7);
      ctx.lineTo(81.6, 405.7);
      ctx.lineTo(80.9, 401.4);
      ctx.lineTo(105.7, 397.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(105.0, 391.5);
      ctx.lineTo(105.5, 395.8);
      ctx.lineTo(80.5, 398.5);
      ctx.lineTo(80.1, 394.2);
      ctx.lineTo(105.0, 391.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(104.7, 385.6);
      ctx.lineTo(104.9, 389.9);
      ctx.lineTo(79.8, 391.2);
      ctx.lineTo(79.6, 386.9);
      ctx.lineTo(104.7, 385.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(104.6, 379.6);
      ctx.lineTo(104.6, 383.9);
      ctx.lineTo(79.5, 383.9);
      ctx.lineTo(79.5, 379.7);
      ctx.lineTo(104.6, 379.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(104.9, 373.6);
      ctx.lineTo(104.7, 377.9);
      ctx.lineTo(79.6, 376.7);
      ctx.lineTo(79.8, 372.4);
      ctx.lineTo(104.9, 373.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(105.5, 367.7);
      ctx.lineTo(105.0, 372.0);
      ctx.lineTo(80.1, 369.4);
      ctx.lineTo(80.5, 365.1);
      ctx.lineTo(105.5, 367.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(106.4, 361.8);
      ctx.lineTo(105.7, 366.1);
      ctx.lineTo(80.9, 362.2);
      ctx.lineTo(81.6, 357.9);
      ctx.lineTo(106.4, 361.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(107.5, 355.9);
      ctx.lineTo(106.6, 360.2);
      ctx.lineTo(82.1, 355.0);
      ctx.lineTo(83.0, 350.8);
      ctx.lineTo(107.5, 355.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(109.1, 350.2);
      ctx.lineTo(107.9, 354.3);
      ctx.lineTo(83.7, 347.9);
      ctx.lineTo(84.8, 343.7);
      ctx.lineTo(109.1, 350.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(110.9, 344.5);
      ctx.lineTo(109.5, 348.6);
      ctx.lineTo(85.7, 340.9);
      ctx.lineTo(87.0, 336.8);
      ctx.lineTo(110.9, 344.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(112.9, 338.9);
      ctx.lineTo(111.4, 342.9);
      ctx.lineTo(88.0, 334.0);
      ctx.lineTo(89.5, 330.0);
      ctx.lineTo(112.9, 338.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(115.3, 333.4);
      ctx.lineTo(113.6, 337.3);
      ctx.lineTo(90.7, 327.2);
      ctx.lineTo(92.4, 323.3);
      ctx.lineTo(115.3, 333.4);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(118.0, 328.1);
      ctx.lineTo(116.0, 331.9);
      ctx.lineTo(93.7, 320.6);
      ctx.lineTo(95.6, 316.7);
      ctx.lineTo(118.0, 328.1);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(120.9, 322.9);
      ctx.lineTo(118.8, 326.6);
      ctx.lineTo(97.0, 314.1);
      ctx.lineTo(99.2, 310.4);
      ctx.lineTo(120.9, 322.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(124.1, 317.8);
      ctx.lineTo(121.8, 321.4);
      ctx.lineTo(100.7, 307.9);
      ctx.lineTo(103.1, 304.3);
      ctx.lineTo(124.1, 317.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(127.6, 313.0);
      ctx.lineTo(125.1, 316.5);
      ctx.lineTo(104.8, 301.8);
      ctx.lineTo(107.3, 298.3);
      ctx.lineTo(127.6, 313.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(131.4, 308.3);
      ctx.lineTo(128.6, 311.7);
      ctx.lineTo(109.1, 295.9);
      ctx.lineTo(111.8, 292.6);
      ctx.lineTo(131.4, 308.3);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(135.3, 303.8);
      ctx.lineTo(132.4, 307.1);
      ctx.lineTo(113.8, 290.3);
      ctx.lineTo(116.7, 287.1);
      ctx.lineTo(135.3, 303.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(139.5, 299.6);
      ctx.lineTo(136.4, 302.7);
      ctx.lineTo(118.7, 285.0);
      ctx.lineTo(121.7, 281.9);
      ctx.lineTo(139.5, 299.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(143.9, 295.6);
      ctx.lineTo(140.7, 298.5);
      ctx.lineTo(123.9, 279.9);
      ctx.lineTo(127.1, 277.0);
      ctx.lineTo(143.9, 295.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(148.5, 291.8);
      ctx.lineTo(145.1, 294.5);
      ctx.lineTo(129.3, 275.0);
      ctx.lineTo(132.7, 272.4);
      ctx.lineTo(148.5, 291.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(153.3, 288.2);
      ctx.lineTo(149.8, 290.8);
      ctx.lineTo(135.1, 270.5);
      ctx.lineTo(138.5, 268.0);
      ctx.lineTo(153.3, 288.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(158.3, 284.9);
      ctx.lineTo(154.6, 287.3);
      ctx.lineTo(141.0, 266.3);
      ctx.lineTo(144.6, 264.0);
      ctx.lineTo(158.3, 284.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(163.4, 281.9);
      ctx.lineTo(159.7, 284.1);
      ctx.lineTo(147.1, 262.4);
      ctx.lineTo(150.9, 260.2);
      ctx.lineTo(163.4, 281.9);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(168.7, 279.2);
      ctx.lineTo(164.8, 281.1);
      ctx.lineTo(153.5, 258.8);
      ctx.lineTo(157.3, 256.9);
      ctx.lineTo(168.7, 279.2);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(174.2, 276.7);
      ctx.lineTo(170.2, 278.5);
      ctx.lineTo(160.0, 255.6);
      ctx.lineTo(163.9, 253.8);
      ctx.lineTo(174.2, 276.7);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(179.7, 274.5);
      ctx.lineTo(175.7, 276.1);
      ctx.lineTo(166.7, 252.7);
      ctx.lineTo(170.7, 251.1);
      ctx.lineTo(179.7, 274.5);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(185.4, 272.6);
      ctx.lineTo(181.3, 274.0);
      ctx.lineTo(173.5, 250.1);
      ctx.lineTo(177.6, 248.8);
      ctx.lineTo(185.4, 272.6);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(191.1, 271.0);
      ctx.lineTo(186.9, 272.2);
      ctx.lineTo(180.5, 248.0);
      ctx.lineTo(184.6, 246.8);
      ctx.lineTo(191.1, 271.0);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(197.0, 269.8);
      ctx.lineTo(192.7, 270.6);
      ctx.lineTo(187.5, 246.2);
      ctx.lineTo(191.7, 245.2);
      ctx.lineTo(197.0, 269.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(202.9, 268.8);
      ctx.lineTo(198.6, 269.4);
      ctx.lineTo(194.6, 244.7);
      ctx.lineTo(198.9, 244.0);
      ctx.lineTo(202.9, 268.8);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(208.8, 268.1);
      ctx.lineTo(204.5, 268.5);
      ctx.lineTo(201.8, 243.6);
      ctx.lineTo(206.1, 243.2);
      ctx.lineTo(208.8, 268.1);
      ctx.closePath();
      ctx.fill();

      // lMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(214.7, 267.8);
      ctx.lineTo(210.4, 268.0);
      ctx.lineTo(209.1, 242.9);
      ctx.lineTo(213.4, 242.7);
      ctx.lineTo(214.7, 267.8);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }

    function rMano(ctx) {

      // rMano/Groupe
      ctx.save();

      // rMano/Groupe/Trac transparent
      ctx.save();
      ctx.beginPath();

      // rMano/Groupe/Trac transparent/Trac
      ctx.moveTo(1060.3, 224.0);
      ctx.bezierCurveTo(973.4, 224.0, 903.0, 294.5, 903.0, 381.4);
      ctx.bezierCurveTo(903.0, 468.3, 973.4, 538.7, 1060.3, 538.7);
      ctx.bezierCurveTo(1147.2, 538.7, 1217.6, 468.3, 1217.6, 381.4);
      ctx.bezierCurveTo(1217.6, 294.5, 1147.2, 224.0, 1060.3, 224.0);
      ctx.closePath();

      // rMano/Groupe/Trac transparent/Trac
      ctx.moveTo(1060.3, 532.4);
      ctx.bezierCurveTo(976.9, 532.4, 909.3, 464.8, 909.3, 381.4);
      ctx.bezierCurveTo(909.3, 298.0, 976.9, 230.4, 1060.3, 230.4);
      ctx.bezierCurveTo(1143.7, 230.4, 1211.3, 298.0, 1211.3, 381.4);
      ctx.bezierCurveTo(1211.3, 464.8, 1143.7, 532.4, 1060.3, 532.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(112, 97, 166)";
      ctx.fill();

      // rMano/Groupe/Groupe

      // rMano/Groupe/Groupe/Trac
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1064.0, 267.4);
      ctx.lineTo(1059.6, 267.4);
      ctx.lineTo(1059.6, 242.3);
      ctx.lineTo(1064.0, 242.3);
      ctx.lineTo(1064.0, 267.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1069.9, 267.6);
      ctx.lineTo(1065.6, 267.4);
      ctx.lineTo(1066.9, 242.4);
      ctx.lineTo(1071.2, 242.6);
      ctx.lineTo(1069.9, 267.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1075.9, 268.2);
      ctx.lineTo(1071.5, 267.8);
      ctx.lineTo(1074.2, 242.9);
      ctx.lineTo(1078.5, 243.3);
      ctx.lineTo(1075.9, 268.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1081.8, 269.1);
      ctx.lineTo(1077.5, 268.4);
      ctx.lineTo(1081.4, 243.7);
      ctx.lineTo(1085.7, 244.4);
      ctx.lineTo(1081.8, 269.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1087.6, 270.3);
      ctx.lineTo(1083.4, 269.4);
      ctx.lineTo(1088.6, 244.9);
      ctx.lineTo(1092.8, 245.8);
      ctx.lineTo(1087.6, 270.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1093.4, 271.8);
      ctx.lineTo(1089.2, 270.7);
      ctx.lineTo(1095.7, 246.5);
      ctx.lineTo(1099.9, 247.6);
      ctx.lineTo(1093.4, 271.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1099.1, 273.6);
      ctx.lineTo(1095.0, 272.3);
      ctx.lineTo(1102.7, 248.4);
      ctx.lineTo(1106.8, 249.8);
      ctx.lineTo(1099.1, 273.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1104.7, 275.7);
      ctx.lineTo(1100.6, 274.2);
      ctx.lineTo(1109.6, 250.8);
      ctx.lineTo(1113.7, 252.3);
      ctx.lineTo(1104.7, 275.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1110.1, 278.1);
      ctx.lineTo(1106.2, 276.3);
      ctx.lineTo(1116.4, 253.4);
      ctx.lineTo(1120.3, 255.2);
      ctx.lineTo(1110.1, 278.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1115.5, 280.8);
      ctx.lineTo(1111.6, 278.8);
      ctx.lineTo(1123.0, 256.5);
      ctx.lineTo(1126.9, 258.4);
      ctx.lineTo(1115.5, 280.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1120.7, 283.7);
      ctx.lineTo(1116.9, 281.6);
      ctx.lineTo(1129.4, 259.8);
      ctx.lineTo(1133.2, 262.0);
      ctx.lineTo(1120.7, 283.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1125.7, 286.9);
      ctx.lineTo(1122.1, 284.6);
      ctx.lineTo(1135.7, 263.5);
      ctx.lineTo(1139.3, 265.9);
      ctx.lineTo(1125.7, 286.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1130.6, 290.4);
      ctx.lineTo(1127.1, 287.9);
      ctx.lineTo(1141.8, 267.6);
      ctx.lineTo(1145.3, 270.1);
      ctx.lineTo(1130.6, 290.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1135.2, 294.1);
      ctx.lineTo(1131.9, 291.4);
      ctx.lineTo(1147.6, 271.9);
      ctx.lineTo(1151.0, 274.6);
      ctx.lineTo(1135.2, 294.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1139.7, 298.1);
      ctx.lineTo(1136.5, 295.2);
      ctx.lineTo(1153.3, 276.5);
      ctx.lineTo(1156.5, 279.4);
      ctx.lineTo(1139.7, 298.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1143.9, 302.3);
      ctx.lineTo(1140.9, 299.2);
      ctx.lineTo(1158.6, 281.5);
      ctx.lineTo(1161.7, 284.5);
      ctx.lineTo(1143.9, 302.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1148.0, 306.7);
      ctx.lineTo(1145.1, 303.5);
      ctx.lineTo(1163.7, 286.7);
      ctx.lineTo(1166.6, 289.9);
      ctx.lineTo(1148.0, 306.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1151.8, 311.3);
      ctx.lineTo(1149.0, 307.9);
      ctx.lineTo(1168.5, 292.1);
      ctx.lineTo(1171.3, 295.5);
      ctx.lineTo(1151.8, 311.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1155.3, 316.1);
      ctx.lineTo(1152.8, 312.6);
      ctx.lineTo(1173.1, 297.8);
      ctx.lineTo(1175.6, 301.3);
      ctx.lineTo(1155.3, 316.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1158.6, 321.1);
      ctx.lineTo(1156.3, 317.4);
      ctx.lineTo(1177.3, 303.8);
      ctx.lineTo(1179.6, 307.4);
      ctx.lineTo(1158.6, 321.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1161.7, 326.2);
      ctx.lineTo(1159.5, 322.5);
      ctx.lineTo(1181.2, 309.9);
      ctx.lineTo(1183.3, 313.7);
      ctx.lineTo(1161.7, 326.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1164.4, 331.5);
      ctx.lineTo(1162.4, 327.7);
      ctx.lineTo(1184.8, 316.3);
      ctx.lineTo(1186.7, 320.1);
      ctx.lineTo(1164.4, 331.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1166.9, 336.9);
      ctx.lineTo(1165.1, 333.0);
      ctx.lineTo(1188.0, 322.8);
      ctx.lineTo(1189.8, 326.7);
      ctx.lineTo(1166.9, 336.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1169.1, 342.5);
      ctx.lineTo(1167.5, 338.5);
      ctx.lineTo(1190.9, 329.5);
      ctx.lineTo(1192.4, 333.5);
      ctx.lineTo(1169.1, 342.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1171.0, 348.1);
      ctx.lineTo(1169.6, 344.0);
      ctx.lineTo(1193.4, 336.3);
      ctx.lineTo(1194.8, 340.4);
      ctx.lineTo(1171.0, 348.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1172.5, 353.9);
      ctx.lineTo(1171.4, 349.7);
      ctx.lineTo(1195.6, 343.2);
      ctx.lineTo(1196.7, 347.4);
      ctx.lineTo(1172.5, 353.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1173.8, 359.7);
      ctx.lineTo(1172.9, 355.5);
      ctx.lineTo(1197.4, 350.3);
      ctx.lineTo(1198.3, 354.5);
      ctx.lineTo(1173.8, 359.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1174.8, 365.6);
      ctx.lineTo(1174.1, 361.4);
      ctx.lineTo(1198.9, 357.4);
      ctx.lineTo(1199.5, 361.7);
      ctx.lineTo(1174.8, 365.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1175.5, 371.5);
      ctx.lineTo(1175.0, 367.3);
      ctx.lineTo(1199.9, 364.6);
      ctx.lineTo(1200.4, 368.9);
      ctx.lineTo(1175.5, 371.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1175.9, 377.5);
      ctx.lineTo(1175.6, 373.2);
      ctx.lineTo(1200.6, 371.9);
      ctx.lineTo(1200.8, 376.2);
      ctx.lineTo(1175.9, 377.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1175.9, 383.5);
      ctx.lineTo(1175.8, 379.2);
      ctx.lineTo(1201.0, 379.2);
      ctx.lineTo(1200.9, 383.5);
      ctx.lineTo(1175.9, 383.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1175.6, 389.4);
      ctx.lineTo(1175.8, 385.1);
      ctx.lineTo(1200.9, 386.5);
      ctx.lineTo(1200.6, 390.7);
      ctx.lineTo(1175.6, 389.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1175.1, 395.4);
      ctx.lineTo(1175.4, 391.1);
      ctx.lineTo(1200.4, 393.7);
      ctx.lineTo(1199.9, 398.0);
      ctx.lineTo(1175.1, 395.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1174.2, 401.3);
      ctx.lineTo(1174.8, 397.0);
      ctx.lineTo(1199.6, 401.0);
      ctx.lineTo(1198.9, 405.2);
      ctx.lineTo(1174.2, 401.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1173.0, 407.1);
      ctx.lineTo(1173.8, 402.9);
      ctx.lineTo(1198.4, 408.2);
      ctx.lineTo(1197.5, 412.3);
      ctx.lineTo(1173.0, 407.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1171.5, 412.9);
      ctx.lineTo(1172.5, 408.7);
      ctx.lineTo(1196.8, 415.3);
      ctx.lineTo(1195.7, 419.4);
      ctx.lineTo(1171.5, 412.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1169.7, 418.6);
      ctx.lineTo(1170.9, 414.5);
      ctx.lineTo(1194.8, 422.3);
      ctx.lineTo(1193.5, 426.3);
      ctx.lineTo(1169.7, 418.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1167.6, 424.2);
      ctx.lineTo(1169.1, 420.2);
      ctx.lineTo(1192.5, 429.2);
      ctx.lineTo(1191.0, 433.2);
      ctx.lineTo(1167.6, 424.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1165.2, 429.7);
      ctx.lineTo(1166.9, 425.7);
      ctx.lineTo(1189.8, 435.9);
      ctx.lineTo(1188.1, 439.8);
      ctx.lineTo(1165.2, 429.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1162.5, 435.0);
      ctx.lineTo(1164.4, 431.1);
      ctx.lineTo(1186.8, 442.6);
      ctx.lineTo(1184.8, 446.4);
      ctx.lineTo(1162.5, 435.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1159.6, 440.2);
      ctx.lineTo(1161.7, 436.4);
      ctx.lineTo(1183.4, 449.0);
      ctx.lineTo(1181.3, 452.7);
      ctx.lineTo(1159.6, 440.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1156.4, 445.2);
      ctx.lineTo(1158.6, 441.6);
      ctx.lineTo(1179.7, 455.3);
      ctx.lineTo(1177.4, 458.9);
      ctx.lineTo(1156.4, 445.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1152.9, 450.1);
      ctx.lineTo(1155.4, 446.6);
      ctx.lineTo(1175.7, 461.4);
      ctx.lineTo(1173.2, 464.8);
      ctx.lineTo(1152.9, 450.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1149.2, 454.8);
      ctx.lineTo(1151.8, 451.4);
      ctx.lineTo(1171.4, 467.2);
      ctx.lineTo(1168.6, 470.5);
      ctx.lineTo(1149.2, 454.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1145.2, 459.2);
      ctx.lineTo(1148.1, 456.0);
      ctx.lineTo(1166.7, 472.8);
      ctx.lineTo(1163.8, 476.0);
      ctx.lineTo(1145.2, 459.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1141.0, 463.5);
      ctx.lineTo(1144.0, 460.4);
      ctx.lineTo(1161.8, 478.2);
      ctx.lineTo(1158.7, 481.2);
      ctx.lineTo(1141.0, 463.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1136.6, 467.5);
      ctx.lineTo(1139.8, 464.6);
      ctx.lineTo(1156.6, 483.3);
      ctx.lineTo(1153.4, 486.1);
      ctx.lineTo(1136.6, 467.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1132.0, 471.3);
      ctx.lineTo(1135.3, 468.5);
      ctx.lineTo(1151.1, 488.1);
      ctx.lineTo(1147.8, 490.8);
      ctx.lineTo(1132.0, 471.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1127.2, 474.9);
      ctx.lineTo(1130.7, 472.3);
      ctx.lineTo(1145.4, 492.6);
      ctx.lineTo(1141.9, 495.1);
      ctx.lineTo(1127.2, 474.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1122.2, 478.1);
      ctx.lineTo(1125.8, 475.7);
      ctx.lineTo(1139.5, 496.9);
      ctx.lineTo(1135.9, 499.2);
      ctx.lineTo(1122.2, 478.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1117.1, 481.2);
      ctx.lineTo(1120.8, 479.0);
      ctx.lineTo(1133.3, 500.8);
      ctx.lineTo(1129.6, 502.9);
      ctx.lineTo(1117.1, 481.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1111.7, 483.9);
      ctx.lineTo(1115.6, 481.9);
      ctx.lineTo(1127.0, 504.3);
      ctx.lineTo(1123.2, 506.3);
      ctx.lineTo(1111.7, 483.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1106.3, 486.4);
      ctx.lineTo(1110.3, 484.6);
      ctx.lineTo(1120.5, 507.6);
      ctx.lineTo(1116.6, 509.3);
      ctx.lineTo(1106.3, 486.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1100.8, 488.6);
      ctx.lineTo(1104.8, 487.0);
      ctx.lineTo(1113.8, 510.5);
      ctx.lineTo(1109.8, 512.0);
      ctx.lineTo(1100.8, 488.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1095.1, 490.5);
      ctx.lineTo(1099.2, 489.1);
      ctx.lineTo(1107.0, 513.0);
      ctx.lineTo(1102.9, 514.3);
      ctx.lineTo(1095.1, 490.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1089.3, 492.0);
      ctx.lineTo(1093.5, 490.9);
      ctx.lineTo(1100.0, 515.2);
      ctx.lineTo(1095.9, 516.3);
      ctx.lineTo(1089.3, 492.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1083.5, 493.3);
      ctx.lineTo(1087.8, 492.4);
      ctx.lineTo(1093.0, 517.0);
      ctx.lineTo(1088.8, 517.9);
      ctx.lineTo(1083.5, 493.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1077.6, 494.3);
      ctx.lineTo(1081.9, 493.6);
      ctx.lineTo(1085.8, 518.4);
      ctx.lineTo(1081.6, 519.1);
      ctx.lineTo(1077.6, 494.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1071.7, 495.0);
      ctx.lineTo(1076.0, 494.5);
      ctx.lineTo(1078.6, 519.5);
      ctx.lineTo(1074.4, 519.9);
      ctx.lineTo(1071.7, 495.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1065.7, 495.3);
      ctx.lineTo(1070.1, 495.1);
      ctx.lineTo(1071.4, 520.2);
      ctx.lineTo(1067.1, 520.4);
      ctx.lineTo(1065.7, 495.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1059.8, 495.4);
      ctx.lineTo(1064.1, 495.4);
      ctx.lineTo(1064.1, 520.5);
      ctx.lineTo(1059.8, 520.5);
      ctx.lineTo(1059.8, 495.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1053.8, 495.1);
      ctx.lineTo(1058.2, 495.3);
      ctx.lineTo(1056.8, 520.4);
      ctx.lineTo(1052.6, 520.2);
      ctx.lineTo(1053.8, 495.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1047.9, 494.5);
      ctx.lineTo(1052.2, 495.0);
      ctx.lineTo(1049.6, 520.0);
      ctx.lineTo(1045.3, 519.5);
      ctx.lineTo(1047.9, 494.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1042.0, 493.6);
      ctx.lineTo(1046.3, 494.3);
      ctx.lineTo(1042.3, 519.1);
      ctx.lineTo(1038.1, 518.4);
      ctx.lineTo(1042.0, 493.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1036.1, 492.4);
      ctx.lineTo(1040.4, 493.3);
      ctx.lineTo(1035.1, 517.9);
      ctx.lineTo(1031.0, 517.0);
      ctx.lineTo(1036.1, 492.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1030.3, 490.9);
      ctx.lineTo(1034.5, 492.1);
      ctx.lineTo(1028.0, 516.3);
      ctx.lineTo(1023.9, 515.2);
      ctx.lineTo(1030.3, 490.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1024.7, 489.1);
      ctx.lineTo(1028.8, 490.5);
      ctx.lineTo(1021.0, 514.4);
      ctx.lineTo(1016.9, 513.0);
      ctx.lineTo(1024.7, 489.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1019.1, 487.1);
      ctx.lineTo(1023.1, 488.6);
      ctx.lineTo(1014.1, 512.0);
      ctx.lineTo(1010.1, 510.5);
      ctx.lineTo(1019.1, 487.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1013.6, 484.7);
      ctx.lineTo(1017.6, 486.4);
      ctx.lineTo(1007.3, 509.4);
      ctx.lineTo(1003.4, 507.6);
      ctx.lineTo(1013.6, 484.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1008.3, 482.0);
      ctx.lineTo(1012.2, 483.9);
      ctx.lineTo(1000.7, 506.3);
      ctx.lineTo(996.9, 504.4);
      ctx.lineTo(1008.3, 482.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1003.1, 479.1);
      ctx.lineTo(1006.8, 481.2);
      ctx.lineTo(994.3, 503.0);
      ctx.lineTo(990.6, 500.8);
      ctx.lineTo(1003.1, 479.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(998.0, 475.9);
      ctx.lineTo(1001.7, 478.2);
      ctx.lineTo(988.0, 499.3);
      ctx.lineTo(984.4, 496.9);
      ctx.lineTo(998.0, 475.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(993.2, 472.4);
      ctx.lineTo(996.7, 474.9);
      ctx.lineTo(981.9, 495.2);
      ctx.lineTo(978.5, 492.7);
      ctx.lineTo(993.2, 472.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(988.5, 468.7);
      ctx.lineTo(991.9, 471.4);
      ctx.lineTo(976.1, 490.9);
      ctx.lineTo(972.8, 488.2);
      ctx.lineTo(988.5, 468.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(984.0, 464.7);
      ctx.lineTo(987.3, 467.6);
      ctx.lineTo(970.5, 486.3);
      ctx.lineTo(967.3, 483.4);
      ctx.lineTo(984.0, 464.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(979.8, 460.5);
      ctx.lineTo(982.9, 463.6);
      ctx.lineTo(965.1, 481.3);
      ctx.lineTo(962.1, 478.3);
      ctx.lineTo(979.8, 460.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(975.7, 456.1);
      ctx.lineTo(978.7, 459.3);
      ctx.lineTo(960.0, 476.1);
      ctx.lineTo(957.2, 472.9);
      ctx.lineTo(975.7, 456.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(972.0, 451.5);
      ctx.lineTo(974.7, 454.8);
      ctx.lineTo(955.2, 470.7);
      ctx.lineTo(952.5, 467.3);
      ctx.lineTo(972.0, 451.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(968.4, 446.7);
      ctx.lineTo(971.0, 450.2);
      ctx.lineTo(950.7, 465.0);
      ctx.lineTo(948.2, 461.5);
      ctx.lineTo(968.4, 446.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(965.1, 441.7);
      ctx.lineTo(967.5, 445.3);
      ctx.lineTo(946.4, 459.0);
      ctx.lineTo(944.1, 455.4);
      ctx.lineTo(965.1, 441.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(962.1, 436.6);
      ctx.lineTo(964.3, 440.3);
      ctx.lineTo(942.5, 452.9);
      ctx.lineTo(940.4, 449.2);
      ctx.lineTo(962.1, 436.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(959.3, 431.3);
      ctx.lineTo(961.3, 435.1);
      ctx.lineTo(939.0, 446.5);
      ctx.lineTo(937.0, 442.7);
      ctx.lineTo(959.3, 431.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(956.9, 425.8);
      ctx.lineTo(958.7, 429.8);
      ctx.lineTo(935.7, 440.0);
      ctx.lineTo(934.0, 436.1);
      ctx.lineTo(956.9, 425.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(954.7, 420.3);
      ctx.lineTo(956.3, 424.3);
      ctx.lineTo(932.8, 433.3);
      ctx.lineTo(931.3, 429.3);
      ctx.lineTo(954.7, 420.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(952.8, 414.6);
      ctx.lineTo(954.2, 418.7);
      ctx.lineTo(930.3, 426.5);
      ctx.lineTo(929.0, 422.4);
      ctx.lineTo(952.8, 414.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(951.2, 408.9);
      ctx.lineTo(952.3, 413.0);
      ctx.lineTo(928.1, 419.6);
      ctx.lineTo(927.0, 415.4);
      ctx.lineTo(951.2, 408.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(949.9, 403.0);
      ctx.lineTo(950.8, 407.3);
      ctx.lineTo(926.3, 412.5);
      ctx.lineTo(925.4, 408.3);
      ctx.lineTo(949.9, 403.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(948.9, 397.2);
      ctx.lineTo(949.6, 401.4);
      ctx.lineTo(924.8, 405.4);
      ctx.lineTo(924.2, 401.1);
      ctx.lineTo(948.9, 397.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(948.3, 391.2);
      ctx.lineTo(948.7, 395.5);
      ctx.lineTo(923.8, 398.2);
      ctx.lineTo(923.3, 393.9);
      ctx.lineTo(948.3, 391.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(947.9, 385.3);
      ctx.lineTo(948.2, 389.6);
      ctx.lineTo(923.1, 390.9);
      ctx.lineTo(922.9, 386.6);
      ctx.lineTo(947.9, 385.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(947.9, 379.3);
      ctx.lineTo(947.9, 383.6);
      ctx.lineTo(922.8, 383.6);
      ctx.lineTo(922.8, 379.4);
      ctx.lineTo(947.9, 379.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(948.1, 373.3);
      ctx.lineTo(947.9, 377.6);
      ctx.lineTo(922.9, 376.4);
      ctx.lineTo(923.1, 372.1);
      ctx.lineTo(948.1, 373.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(948.7, 367.4);
      ctx.lineTo(948.3, 371.7);
      ctx.lineTo(923.3, 369.1);
      ctx.lineTo(923.8, 364.8);
      ctx.lineTo(948.7, 367.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(949.6, 361.5);
      ctx.lineTo(948.9, 365.7);
      ctx.lineTo(924.2, 361.9);
      ctx.lineTo(924.8, 357.6);
      ctx.lineTo(949.6, 361.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(950.8, 355.6);
      ctx.lineTo(949.9, 359.8);
      ctx.lineTo(925.4, 354.7);
      ctx.lineTo(926.3, 350.5);
      ctx.lineTo(950.8, 355.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(952.3, 349.9);
      ctx.lineTo(951.2, 354.0);
      ctx.lineTo(927.0, 347.6);
      ctx.lineTo(928.1, 343.4);
      ctx.lineTo(952.3, 349.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(954.1, 344.2);
      ctx.lineTo(952.8, 348.3);
      ctx.lineTo(928.9, 340.6);
      ctx.lineTo(930.2, 336.5);
      ctx.lineTo(954.1, 344.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(956.2, 338.6);
      ctx.lineTo(954.7, 342.6);
      ctx.lineTo(931.2, 333.7);
      ctx.lineTo(932.8, 329.6);
      ctx.lineTo(956.2, 338.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(958.6, 333.1);
      ctx.lineTo(956.8, 337.0);
      ctx.lineTo(933.9, 326.9);
      ctx.lineTo(935.7, 323.0);
      ctx.lineTo(958.6, 333.1);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(961.3, 327.8);
      ctx.lineTo(959.3, 331.6);
      ctx.lineTo(936.9, 320.3);
      ctx.lineTo(938.9, 316.4);
      ctx.lineTo(961.3, 327.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(964.2, 322.6);
      ctx.lineTo(962.0, 326.3);
      ctx.lineTo(940.3, 313.8);
      ctx.lineTo(942.5, 310.1);
      ctx.lineTo(964.2, 322.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(967.4, 317.5);
      ctx.lineTo(965.0, 321.1);
      ctx.lineTo(944.0, 307.5);
      ctx.lineTo(946.4, 303.9);
      ctx.lineTo(967.4, 317.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(970.9, 312.7);
      ctx.lineTo(968.3, 316.2);
      ctx.lineTo(948.0, 301.5);
      ctx.lineTo(950.6, 298.0);
      ctx.lineTo(970.9, 312.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(974.6, 308.0);
      ctx.lineTo(971.9, 311.4);
      ctx.lineTo(952.4, 295.6);
      ctx.lineTo(955.1, 292.3);
      ctx.lineTo(974.6, 308.0);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(978.6, 303.5);
      ctx.lineTo(975.7, 306.8);
      ctx.lineTo(957.0, 290.0);
      ctx.lineTo(959.9, 286.8);
      ctx.lineTo(978.6, 303.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(982.8, 299.3);
      ctx.lineTo(979.7, 302.3);
      ctx.lineTo(961.9, 284.7);
      ctx.lineTo(965.0, 281.6);
      ctx.lineTo(982.8, 299.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(987.1, 295.3);
      ctx.lineTo(983.9, 298.2);
      ctx.lineTo(967.1, 279.6);
      ctx.lineTo(970.3, 276.7);
      ctx.lineTo(987.1, 295.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(991.7, 291.5);
      ctx.lineTo(988.4, 294.2);
      ctx.lineTo(972.6, 274.7);
      ctx.lineTo(975.9, 272.0);
      ctx.lineTo(991.7, 291.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(996.6, 287.9);
      ctx.lineTo(993.1, 290.5);
      ctx.lineTo(978.3, 270.2);
      ctx.lineTo(981.8, 267.7);
      ctx.lineTo(996.6, 287.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1001.5, 284.6);
      ctx.lineTo(997.9, 287.0);
      ctx.lineTo(984.3, 266.0);
      ctx.lineTo(987.9, 263.7);
      ctx.lineTo(1001.5, 284.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1006.7, 281.6);
      ctx.lineTo(1002.9, 283.8);
      ctx.lineTo(990.4, 262.1);
      ctx.lineTo(994.1, 259.9);
      ctx.lineTo(1006.7, 281.6);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1012.0, 278.9);
      ctx.lineTo(1008.1, 280.8);
      ctx.lineTo(996.7, 258.5);
      ctx.lineTo(1000.6, 256.6);
      ctx.lineTo(1012.0, 278.9);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1017.4, 276.4);
      ctx.lineTo(1013.4, 278.2);
      ctx.lineTo(1003.3, 255.3);
      ctx.lineTo(1007.2, 253.5);
      ctx.lineTo(1017.4, 276.4);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1023.0, 274.2);
      ctx.lineTo(1018.9, 275.8);
      ctx.lineTo(1009.9, 252.4);
      ctx.lineTo(1014.0, 250.8);
      ctx.lineTo(1023.0, 274.2);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1028.6, 272.3);
      ctx.lineTo(1024.5, 273.7);
      ctx.lineTo(1016.8, 249.8);
      ctx.lineTo(1020.9, 248.5);
      ctx.lineTo(1028.6, 272.3);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1034.4, 270.7);
      ctx.lineTo(1030.2, 271.8);
      ctx.lineTo(1023.7, 247.7);
      ctx.lineTo(1027.9, 246.5);
      ctx.lineTo(1034.4, 270.7);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1040.2, 269.5);
      ctx.lineTo(1036.0, 270.3);
      ctx.lineTo(1030.8, 245.8);
      ctx.lineTo(1035.0, 244.9);
      ctx.lineTo(1040.2, 269.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1046.1, 268.5);
      ctx.lineTo(1041.8, 269.1);
      ctx.lineTo(1037.9, 244.4);
      ctx.lineTo(1042.1, 243.7);
      ctx.lineTo(1046.1, 268.5);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1052.0, 267.8);
      ctx.lineTo(1047.7, 268.2);
      ctx.lineTo(1045.1, 243.3);
      ctx.lineTo(1049.4, 242.9);
      ctx.lineTo(1052.0, 267.8);
      ctx.closePath();
      ctx.fill();

      // rMano/Groupe/Groupe/Trac
      ctx.beginPath();
      ctx.moveTo(1058.0, 267.5);
      ctx.lineTo(1053.7, 267.7);
      ctx.lineTo(1052.3, 242.6);
      ctx.lineTo(1056.6, 242.4);
      ctx.lineTo(1058.0, 267.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
    initInfo();