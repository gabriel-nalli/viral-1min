      const doghouseArt = [
        ".............LLLL.............", "............LLRRDD............", "...........LLLRRRDD...........", "..........LLLLRRRRDD..........",
        ".........LLLLLRRRRRDD.........", "........LLLLLLRRRRRRDD........", ".......LLLLLLLRRRRRRRDD.......", "......LLLLLLLLRRRRRRRRDD......",
        ".....LLLLLLLLLRRRRRRRRRDD.....", "....LLLLLLLLLLRRRRRRRRRRDD....", "...LLLLLLLLLLLRRRRRRRRRRRDD...", "..LLLLLLLLLLLLRRRRRRRRRRRRDD..",
        ".LLLLLLLLLLLLLRRRRRRRRRRRRRDD.", "LLLLLLLLLLLLLLRRRRRRRRRRRRRRDD", "D...WWWWWWWWWWWWWWWWWWWWWW...D", "....WMMMMMMMMMMMMMMMMMMMMW....",
        "....WMMMMMMMMMMMMMMMMMMMMW....", "....WMMMMMMMMMMMMMMMMMMMMW....", "....WMMMMMMMMMMMMMMMMMMMMW....", "....WMMMMMMMMMMMMMMMMMMMMW....",
        "....WMMMMMMMMMMMMMMMMMMMMW....", "....WMMMMWBBBBBBBBBBWMMMMW....", "....WMMMWBBBBBBBBBBBBWMMMW....", "....WMMMWBBBBBBBBBBBBWMMMW....",
        "....WMMMWBBBBBBBBBBBBWMMMW....", "....WMMMWBBBBBBBBBBBBWMMMW....", "....WMMMWBBBBBBBBBBBBWMMMW....", "....WMMMWBBBBBBBBBBBBWMMMW....",
        "....WWWWWWWWWWWWWWWWWWWWWW...."  
      ];
      const housePalette = {'R': '#FF2D7A', 'L': '#FF6B9E', 'D': '#D81B60', 'W': '#8A4F2D', 'M': '#ECA764', 'B': '#1A1A1A'};
      let houseHtml = '';
      doghouseArt.forEach((rowStr, y) => { for(let x=0; x<rowStr.length; x++) { if(rowStr[x] !== '.') houseHtml += `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${housePalette[rowStr[x]]}"/>`; } });

      const trophyArt = [
        "..................OOOOOOOOOOOO..................", "................OO111111111111OO................", "...............O1111111111111111O...............",
        "..............O122222222222222221O..............", "..............O222222222222222223O..............", "...........OOOO222222222222222223OOOO...........",
        ".........OO111O222222222222222223O111OO.........", "........O11223O222222222222222223O32211O........", ".......O122233O222222222222222223O332221O.......",
        ".......O2233OOO222222222222222223OOO3322O.......", ".......O233O..O222222224422222223O..O332O.......", ".......O23O...O222222244442222223O...O32O.......",
        ".......O23O...O222222444444222223O...O32O.......", ".......O23O...O222224444444422223O...O32O.......", ".......O23O...O222222444444222223O...O32O.......",
        ".......O233O..O222222244442222223O..O332O.......", ".......O1233OOO222222242252222223OOO3321O.......", "........O12233O322222222222222233O33221O........",
        ".........OO122O333222222222222333O221OO.........", "...........OOOO.OO333333333333OO.OOOO...........", "..................OOOOOOOOOOOO..................",
        "....................O222233O....................", "...................OO222233OO...................", "..................O1122222333O..................",
        ".................O122222222333O.................", "..........OOOO...OOOOOOOOOOOOOO.................", "........OO1111OO................................",
        ".......O1122221O.......OOOOOOOOOOOOOOOOOOOO.....", "......O12222223O......O66666666666661166666O....", "......O22222233O.....O6777777777777722777776O...",
        "......O2333333OO.....O6777777777777722777776O...", "......OOOOOOOO11OO...O8888888888888833888888O...", "......O111111O221O...O7777777777777722777777O...",
        ".....O1222222O223O...O8888888888888833888888O...", ".....O2222223O333O...O7777777777777722777777O...", "....O2333333OOOOO....O8888888888888833888888O...",
        "....OOOOOOOO111OO....OOOOOOOOOOOOOOOOOOOOOOOO...", "...O1111111O2221O...............................", "..O12222222O2223O...............................",
        "..O22222223O3333O...............................", "..O23333333OOOOO................................", "..OOOOOOOOO.....................................",
        "................................................"
      ];
      const trophyPalette = {'O': '#2D1C11', '1': '#FFF275', '2': '#FFC82F', '3': '#D68716', '4': '#FF70A6', '5': '#D94A7A', '6': '#8DE383', '7': '#5DB554', '8': '#3B7337'};
      let troHtml = '';
      trophyArt.forEach((rowStr, y) => { for(let x=0; x<rowStr.length; x++) { if(rowStr[x] !== '.') troHtml += `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${trophyPalette[rowStr[x]]}"/>`; } });

      const ecosystemArt = [
        "................................................", "................................................", "................................................",
        "................KKKKKKKKKKKKKKKK................", "...............KDDDDDDDDDDDDDDDDK...............", "...............KDKKKKKKKKKKKKKKDK...............",
        "...............KDKPPPPPPPPPPPPKDK...............", "...............KDKPppPppPppPppKDK...............", "...............KDKPPPPPPPPPPPPKDK...............",
        "......KKKKKK...KDKPppPppPppPppKDK...............", "....KKKKKKKKKK.KDKPPPPPPPPPPPPKDK...............", "...KKKKKKKKKKKKKDKPppPppPppPppKDK...............",
        "....KDDDDDDDDK.KDKPPPPPPPPPPPPKDK...............", ".....KDDDDDDK..KDKPppPppPppPppKDK...............", "......KKKKKK.Y.KDKPPPPPPPPPPPPKDK...............",
        ".............Y.KDKPppPppPppPppKDK...............", "..P...P...P..Y.KDKPPPPPPPPPPPPKDK...............", "...............KDKPppPppPppPppKDK.......KKK.....",
        "...............KDKPPPPPPPPPPPPKDK......KDDDK....", "...............KDKPppPppPppPppKDK.....KDDDDDK...", "...............KDKPPPPPPPPPPPPKDK.P..PKDDPDDK...",
        ".......P.......KDKPppPppPppPppKDK.....KDDDDDK...", ".......K.......KDKPPPPPPPPPPPPKDK......KDDDK....", ".....KKKKK.....KDKPppPppPppPppKDK.......KKK.....",
        "....KWWWWWK.P..KDKPPPPPPPPPPPPKDK...............", "...KWWKKKWWK...KDKPppPppPppPppKDK...............", "...KWKPPPKWK...KDKPPPPPPPPPPPPKDK..P...P...P....",
        "...KWWKKKWWK...KDKPppPppPppPppKDK...............", "....KWWWWWK....KDKPPPPPPPPPPPPKDK........KK.....", ".....KKKKK..P..KDKPppPppPppPppKDK.......KGGK....",
        "...............KDKPPPPPPPPPPPPKDK......KGGGGK...", "...............KDKPppPppPppPppKDK......KGGGGK...", "...............KDKPPPPPPPPPPPPKDK.......KGGK....",
        "...............KDKKKKKKKKKKKKKKDK........KK.....", "...............KDDDDDDDKKDDDDDDKK...............", "...............KDDDDDDDDDDDDDDDDK...............",
        "................KKKKKKKKKKKKKKKK................", "................................................", "................................................",
        "................................................", "................................................", "................................................",
        "................................................", "................................................"
      ];
      const ecoPalette = {'K': '#1A1A1A', 'D': '#333333', 'P': '#FF2D7A', 'p': '#FFA6C9', 'W': '#FFFFFF', 'G': '#888888', 'Y': '#FCD02E'};
      let htmlPhone = '<g className="eco-phone">', htmlCap = '<g className="eco-cap">', htmlRobot = '<g className="eco-robot">', htmlGear = '<g className="eco-gear">', htmlLines = '<g className="eco-lines">';
      ecosystemArt.forEach((rowStr, y) => {
        for(let x=0; x<rowStr.length; x++) {
          let char = rowStr[x];
          if(char !== '.') {
            let rect = `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${ecoPalette[char]}"/>`;
            if (char === 'P' && (x < 15 || x > 33)) htmlLines += rect;
            else if (x >= 15 && x <= 33) htmlPhone += rect;
            else if (x < 15 && y < 20) htmlCap += rect;
            else if (x < 15 && y >= 20) htmlRobot += rect;
            else if (x > 33) htmlGear += rect;
          }
        }
      });
      let ecoHtml = htmlLines + '</g>' + htmlPhone + '</g>' + htmlCap + '</g>' + htmlRobot + '</g>' + htmlGear + '</g>';

      const phoneDogArt = [
        "................................................", "...........................PPPPPPPPPPP..........", ".........................PPPPPPPPPPPPPPP........",
        "........................PPPPPPPPPPPPPPPPP.......", "........................PPPPPWWPPPWWPPPPP.......", "........................PPPPWPPPWPPPWPPPP.......",
        "........................PPPPWPPPPPPPWPPPP.......", "........................PPPPPWPPPPPWPPPPP.......", "...........KKKKKKKKKKKKKKKKK.PPPWPPPWPPPP.......",
        "..........KDDDDDDDDDDDDDDDDDK.PPPPWPWPPPP.......", "..........KDKKKKKKKKKKKKKKKDK..PPPPWPPPPP.......", "..........KDKppppppppppppppDK..PPPPPPPPPP.......",
        "..........KDKppppppppppppppDK.PPPPPPPPP.........", "..........KDKppppppppppppppDKPPPPPPPP...........", "..........KDKppppppppppppppDKPPP................",
        "..........KDKppppppppppppppDKP..................", "..........KDKppppppppppppppDK...................", "..........KDKppppppppppppppDK...................",
        "..........KDKppppppppppppppDK...................", "..........KDKppBBppppppBBppDK...................", "..........KDKpBBBBppppBBBBpDK...................",
        "..........KDKpBLLBBppBLLBBpDK...................", "..........KDKpLLLLLLLLLLLLpDK...................", "..........KDKpLLLLLLLLLLLLpDK...................",
        "..........KDKpLLKLLLLLLKLLpDK...................", "..........KDKpLLWLLLLLLWLLpDK...................", "..........KDKpLLLLLLLLLLLLpDK...................",
        "..........KDKpLLLSSSSSSLLLpDK...................", "..........KDKpLLSSSKKSSSLLpDK...................", "..........KDKpLLSSKKKKSSSLLpDK...................",
        "..........KDKpLLLSSSSSSLLLpDK...................", "..........KDKpLLLLLLLLLLLLpDK...................", "..........KDKKKLLLLLLLLLLKKDK...................",
        "..........KDKKLLLLLLLLLLLLKDK...................", "..........KDKKKKKKKKKKKKKKKDK...................", "..........KDDDDDDDDKDDDDDDDDK...................",
        "..........KDDDDDDDDDDDDDDDDDK...................", "...........KKKKKKKKKKKKKKKKK....................", "................................................",
        "................................................", "................................................", "................................................"
      ];
      const pdPalette = {'K': '#1A1A1A', 'D': '#333333', 'P': '#FF2D7A', 'p': '#FFA6C9', 'W': '#FFFFFF', 'L': '#F4B678', 'B': '#9B5A30', 'S': '#FFF0DB'};
      let pdHtmlPhone = '<g className="eco-phone">', pdHtmlDog = '<g className="pd-dog">', pdHtmlBubble = '<g className="pd-bubble">';
      phoneDogArt.forEach((rowStr, y) => {
        for(let x=0; x<rowStr.length; x++) {
          let char = rowStr[x];
          if(char !== '.') {
            let rect = `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${pdPalette[char]}"/>`;
            if (y <= 15 && x >= 24) pdHtmlBubble += rect;
            else if (y >= 19 && y <= 32 && x >= 13 && x <= 26 && char !== 'p') pdHtmlDog += rect;
            else pdHtmlPhone += rect;
          }
        }
      });
      let pdHtml = pdHtmlPhone + '</g>' + pdHtmlDog + '</g>' + pdHtmlBubble + '</g>';

      const phoneScriptArt = [
        "................................................", "................................................", "................................................", 
        "................................................", "................................................", "................................................", 
        "..................KKKKKKKKKKKKK.................", ".................KDDDDDDDDDDDDDK................", ".................KDKKKKKKKKKKKDK................", 
        ".................KDKSSSSSSSSSKDK................", ".................KDKSSSSSSSSSKDK................", ".................KDKSppSSSppSKDK................", 
        ".................KDKSSPSSSSSSKDK................", ".................KDKSSPPSSSSSKDK................", ".................KDKSSPPPSSSSKDK................", 
        ".................KDKSSPPSSSSSKDK................", ".................KDKSSPSSSSSSKDK................", ".................KDKSSSSSSSSSKDK.......PPPPPPP..", 
        ".................KDKSSSSSSSSSKDK......PpppppppP.", ".................KDKSppSSSppSKDK..P...PpppppppP.", "....PPPPPPP......KDKSSSSSSSSSKDK...P..PpPPPPPpP.", 
        "...PWWWWWWWP.....KDKSSPSSSSSSKDK....P.PpppppppP.", "..PWPPWWWPWWP.P..KDKSSPPSSSSSKDK....P.PpPPPPPpP.", "..PWWPWPWPPWP..P.KDKSSPPPSSSSKDK....P.PpppppppP.", 
        "..PWPPWWWPWWP...PKDKSSPPSSSSSKDK......PpPPPPPpP.", "...PWWWWWWWP.....KDKSSPSSSSSSKDK......PpppppppP.", "....PPPPPPP......KDKSSSSSSSSSKDK......PPPPPPPPP.", 
        ".................KDKSSSSSSSSSKDK................", ".................KDKSSSSSSSSSKDK................", ".................KDKSppSSSppSKDK................", 
        ".................KDKSSSSSSSSSKDK................", ".................KDKKKKKKKKKKKDK................", ".................KDDDDDDDDKDDDDK................", 
        ".................KDDDDDDDDDDDDDK................", "..................KKKKKKKKKKKKK.................", "................................................", 
        "................................................", "................................................", "................................................", 
        "................................................", "................................................", "................................................", 
        "................................................", "................................................"  
      ];
      const psPalette = {'K': '#1A1A1A', 'D': '#333333', 'S': '#2B2B36', 'P': '#FF2D7A', 'p': '#FFA6C9', 'W': '#FFFFFF'};
      let psHtmlPhone = '<g className="eco-phone">', psHtmlLink = '<g className="eco-cap">', psHtmlDoc = '<g className="eco-robot">', psHtmlLines = '<g className="eco-lines">';
      phoneScriptArt.forEach((rowStr, y) => {
        for(let x=0; x<rowStr.length; x++) {
          let char = rowStr[x];
          if(char !== '.') {
            let rect = `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${psPalette[char]}"/>`;
            if (char === 'P' && ((x >= 13 && x < 17) || (x > 31 && x <= 36))) psHtmlLines += rect;
            else if (x >= 17 && x <= 31) psHtmlPhone += rect;
            else if (x < 17) psHtmlLink += rect;
            else if (x > 31) psHtmlDoc += rect;
          }
        }
      });
      let psHtml = psHtmlLines + '</g>' + psHtmlPhone + '</g>' + psHtmlLink + '</g>' + psHtmlDoc + '</g>';

      const aiBotAltArt = [
        "................................................", "................................................", "................................................",
        "......................PPPP..PPPP................", ".....................PPPPPPPPPPPP...............", ".....................PPPP.PP.PPPP...............",
        "......................PPPP..PPPP................", ".................KKKKKKKKKKKKKKKK...............", "...............KKWWWWWWWWWWWWWWWWKK.............",
        "..............KWWWWWWWWWWWWWWWWWWWWK............", ".............KWWWWWWWWWWWWWWWWWWWWWWK...........", "............KWWWWKKKKKKKKKKKKKKKKWWWWK..........",
        "............KWWWKDDDDDDDDDDDDDDDDKWWWK..........", "............KWWWKDDDPPPPDDDPPPPDDKWWWK..........", "......KK....KWWWKDDPPPPWDDPPPPWDDKWWWK....KK....",
        ".....KPPK...KWWWKDDPPPPWDDPPPPWDDKWWWK...KPPK...", "....KPPPPK..KWWWKDDDDDDDDDDDDDDDDKWWWK..KPPPPK..", "...KPPPPPPKKKWWWKDDDDDDDDDDDDDDDDKWWWKKKPPPPPPK.",
        "...KPPPPPPKKKWWWKDDpDPPPPPPPPDpDDKWWWKKKPPPPPPK.", "....KPPPPK..KWWWKDDDDDDPPPPDDDDDDKWWWK..KPPPPK..", ".....KPPK...KWWWWKKKKKKKKKKKKKKKKWWWWK...KPPK...",
        "......KK....KWWWWWWWWWWWWWWWWWWWWWWWWK....KK....", ".............KWWWWWWWWWWWWWWWWWWWWWWK...........", "..............KWWWWWWWWWWWWWWWWWWWWK............",
        "...............KKWWWWWWWWWWWWWWWWKK.............", ".................KKKKKKKKKKKKKKKK...............", "......................KKKKKK....................",
        "...................KKKWWWWWWKKK.................", "..................KWWWWWWWWWWWWK................", "..................KWWWWWWWWWWWWK................",
        "...................KKKKKKKKKKKK.................", "................................................", ".....YYYY.......................................",
        "....YYYYYY.............................YYYY.....", ".....YYYY.............................YYYYYY....", ".......................................YYYY.....",
        "................................................", "................................................", "................................................",
        "................................................", "................................................", "................................................",
        "................................................", "................................................"
      ];
      const aiPalette = {'K': '#1A1A1A', 'W': '#FFFFFF', 'P': '#FF2D7A', 'p': '#FFA6C9', 'D': '#2B2B36', 'Y': '#FFC107'};
      let aiHtmlRobot = '<g className="ai-robot-body">', aiHtmlSparkles = '<g className="ai-sparkles-layer">';
      aiBotAltArt.forEach((rowStr, y) => {
        for(let x=0; x<rowStr.length; x++) {
          let char = rowStr[x];
          if(char !== '.') {
            let rect = `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${aiPalette[char]}"/>`;
            if (char === 'Y') aiHtmlSparkles += `<g className="ai-sparkle-group"><g className="ai-sparkle">${rect}</g></g>`;
            else aiHtmlRobot += rect;
          }
        }
      });
      let aiHtml = aiHtmlRobot + '</g>' + aiHtmlSparkles + '</g>';

      const liveClassArt = [
        "................................................", 
        "................................................", 
        "..........................RRRRRRRRRRRRRRRRR.....", 
        "..........................RRWRRRWRWRWRWWWRR.....", 
        "..........................RRWRRRWRWRWRWRRRR.....", 
        "..........................RRWRRRWRWRWRWWRRR.....", 
        "..........................RRWRRRWRRWRRWRRRR.....", 
        "......KKKKKKKKKKKKKKKKKKKKRRWWWRWRRWRRWWWRR.....", 
        ".....KDDDDDDDDDDDDDDDDDDDDKRRRRRRRRRRRRRRRR.....", 
        ".....KDKKKKKKKKKKKKKKKKKKDK.....................", 
        ".....KDKppppppppppppppppKDK.....................", 
        ".....KDKpPPPPPPPPPPPPPPpKDK.....................", 
        ".....KDKpPppppppppppppPpKDK.....................", 
        ".....KDKpPpppWWpppppppPpKDK.....................", 
        ".....KDKpPpppWWWppppppPpKDK.....................", 
        ".....KDKpPpppWWWWpppppPpKDK.....................", 
        ".....KDKpPpppWWWWWppppPpKDK.....................", 
        ".....KDKpPpppWWWWpppppPpKDK.....................", 
        ".....KDKpPpppWWWppppppPpKDK.....................", 
        ".....KDKpPpppWWpppppppPpKDK.....................", 
        ".....KDKpPPPPPPPPPPPPPPpKDK.....................", 
        ".....KDKppppppppppppppppKDK..KKKKKKKKKKKKKKK....", 
        ".....KDKKKKKKKKKKKKKKKKKKDK..KWWWWWWWWWWWWWK....", 
        ".....KDDDDDDDDDDDDDDDDDDDDK..KWWWWBBBBBWWWWK....", 
        "......KKKKKKKKKKKKKKKKKKKK...KWWWBBBBBBBWWWK....", 
        "...........KDDDDDDDK.........KWWBBBBBBBBBWWK....", 
        "...........KDDDDDDDK.........KWWBBFFFFFFBWWK....", 
        "...........KDDDDDDDK.........KWWBFKFFFFKFBWK....", 
        "........KKKKDDDDDDDKKKK......KWWBFKFFFFKFBWK....", 
        ".......KDDDDDDDDDDDDDDDK.....KWWWBBFFFFBBWWK....", 
        ".......KKKKKKKKKKKKKKKKK.....KWWWWBYYYYBWWWK....", 
        ".............................KWWWYYYYYYYYWWK....", 
        ".............................KWWYYYYYYYYYYWK....", 
        ".............................KWWYYYYYYYYYYWK....", 
        ".............................KKKKKKKKKKKKKKK....", 
        "................................................", 
        "................................................"  
      ];
      
      const lcPalette = {
        'K': '#1A1A1A', 'D': '#333333', 'R': '#FF2D7A', 'W': '#FFFFFF', 
        'p': '#FFC2D6', 'P': '#FF9EBE', 'B': '#3B2617', 'F': '#F4B678', 'Y': '#FFC82F'
      };

      let lcHtmlMonitor = '<g className="eco-phone">'; 
      let lcHtmlAvatar = '<g className="eco-cap">';   

      liveClassArt.forEach((rowStr, y) => {
        for(let x=0; x<rowStr.length; x++) {
          let char = rowStr[x];
          if(char !== '.') {
            let rect = `<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${lcPalette[char]}"/>`;
            if (x >= 29 && y >= 21) {
              lcHtmlAvatar += rect;
            } else {
              lcHtmlMonitor += rect;
            }
          }
        }
      });
      let lcHtml = lcHtmlMonitor + '</g>' + lcHtmlAvatar + '</g>';

      const viralVideoArt = [
        "................................................", "................................................", "................................................",
        "................................................", "...................YY...........................", "..................YYYY..........................",
        "...................YY...........................", "................................................", "..................KKKKKKKKKKKKK.................",
        ".................KDDDDDDDDDDDDDK................", ".................KDKKKKKKKKKKKDK................", ".................KDKWWWWWWWWWKDK................",
        ".................KDKWWWWWWWWWKDK................", ".................KDKWWWWWWWWWKDK.......YY.......", ".................KDKWWWWWWWWWKDK......YYYY......",
        ".................KDKWWWKWWWWWKDK.......YY.......", ".................KDKWWKKKWWWWKDK................", ".................KDKWKKKKKWWWKDK................",
        ".................KDKKKKKKKKKWKDK................", ".................KDKKKKKKKKKWKDK................", ".................KDKWKKKKKWWWKDK................",
        ".................KDKWWKKKWWWWKDK................", ".................KDKWWWKWWWWWKDK................", ".................KDKWWWWWWWWWKDK................",
        ".................KDKWWWWWWWWWKDK................", ".................KDKWWWWWWWWWKDK................", ".................KDKWWWRRWWWWKDK................",
        ".................KDKWWWRRWWWWKDK................", ".................KDKWWWWWWWWWKDK................", ".................KDKWWWWWWWWWKDK................",
        ".................KDKKKKKKKKKKKDK................", ".................KDDDDDDDDKDDDDK................", ".................KDDDDDDDDDDDDDK................",
        "..................KKKKKKKKKKKKK.................", "................................................", "................................................",
        "................................................", "................................................", "................................................",
        "................................................", "................................................", "................................................",
        "................................................", "................................................"
      ];
      const vvPalette = { 'K':'#1A1A1A', 'D':'#333333', 'W':'#FFFFFF', 'R':'#FF2D7A', 'Y':'#FFC107' };
      let vvPhone = '<g className="eco-phone">', vvRec = '<g className="pv-rec">', vvSparkle = '<g className="ai-sparkle-group"><g className="ai-sparkle">';
      viralVideoArt.forEach((r,y)=>{for(let x=0;x<r.length;x++){let c=r[x];if(c!=='.'){let h=`<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${vvPalette[c]}"/>`;if(c==='R')vvRec+=h;else if(c==='Y')vvSparkle+=h;else vvPhone+=h;}}});
      let vvHtml = vvPhone+'</g>'+vvRec+'</g>'+vvSparkle+'</g></g></g>';

      const zapArt = [
        "................................................", 
        "................................................", 
        "................................................",
        "................................................", 
        "................................................", 
        "................................................",
        "...............KKKKKKKKKKKKKKKK.................", 
        "..............KDDDDDDDDDDDDDDDDK................", 
        "..............KDKKKKKKKKKKKKKKDK................",
        "..............KDKWWWWWWWWWWWWWKDK...............", 
        "..............KDKWWWWWWWWWWWWWKDK...............", 
        "..............KDKWWWWWWWWWWWWWKDK...............",
        "..............KDKWWwLLLLLLLwWWKDK...............", 
        "..............KDKWWwLLLLLLLwWWKDK...............",
        "..............KDKWWWWWWWWWWWWWKDK...............", 
        "..............KDKWWwPPPPPPpwWWKDK...............", 
        "..............KDKWWPPPPPPPPpWWKDK...............",
        "..............KDKWWPPWWWWPPpWWKDK...............", 
        "..............KDKWWPPPPPPPPpWWKDK...............", 
        "..............KDKWWPPPPPPPPpWWKDK.......YY......",
        "..............KDKWWwPPPPPPpwWWKDK......YYYY.....", 
        "..............KDKWWWWWPpWWWWWWKDK......YYYY.....", 
        "..............KDKWWWWPpWWWWWWWKDK.....YYYYYY....",
        "..............KDKWWWWWWWWWWWWWKDK.....YYYYYY....", 
        "..............KDKWWwGGGGGGgWWWKDK......YYYY.....", 
        "..............KDKWWGGGGGGGGgWWKDK.......YY......",
        "..............KDKWWGGWWWWGGgWWKDK...............", 
        "..............KDKWWGGGGGGGGgWWKDK...............", 
        "..............KDKWWGGGGGGGGgWWKDK...............",
        "..............KDKWWwGGGGGGgWWWKDK...............", 
        "..............KDKWWWWWWGgWWWWWKDK...............", 
        "..............KDKWWWWWWWGgWWWWKDK...............",
        "..............KDKWWWWWWWWWWWWWKDK...............", 
        "..............KDKWWWWWWWWWWWWWKDK...............", 
        "..............KDKKKKKKKKKKKKKKDK................", 
        "..............KDDDDDDDDDDKDDDDDK................",
        "..............KDDDDDDDDDDDDDDDDK................", 
        "...............KKKKKKKKKKKKKKKK.................", 
        "................................................",
        "................................................", 
        "................................................", 
        "................................................",
        "................................................", 
        "................................................"
      ];
      const zapPalette = { 'K':'#1A1A1A', 'D':'#333333', 'W':'#FFFFFF', 'w':'#FFE0EC', 'L':'#CBD5E1', 'P':'#FF2D7A', 'p':'#D81B60', 'G':'#8DE383', 'g':'#5DB554', 'Y':'#FFC107' }; 
      let zPhone = '<g className="eco-phone">', zBubble = '<g className="zap-bubble">', zBell = '<g className="wb-bell">';
      zapArt.forEach((r,y)=>{
        for(let x=0;x<r.length;x++){
          let c=r[x];
          if(c!=='.'){
            let h=`<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${zapPalette[c]}"/>`;
            if(c==='P'||c==='p'||c==='G'||c==='g') zBubble+=h;
            else if(c==='Y') zBell+=h;
            else zPhone+=h;
          }
        }
      });
      let zHtml = zPhone+'</g>'+zBubble+'</g>'+zBell+'</g>';

      const chartArt = [
        "................................................",
        ".......................................R........",
        "......................................RYR.......",
        ".....................................RYYYR......",
        "......................................RYR.......",
        ".......................................R........",
        "................................................",
        "...............................a................",
        "................................................",
        "............................a...................",
        "................................................",
        ".........................a........KKKKKKKK......",
        ".................................KGGGGGGGGK.....",
        "......................a..........KGLGGGGgDK.....",
        ".................................KGLGGGGgDK.....",
        "...................a.............KGLGGGGgDK.....",
        ".................................KGLGGGGgDK.....",
        "................a................KGLGGGGgDK.....",
        ".......................KKKKKKKK..KGLGGGGgDK.....",
        ".............a........KPPPPPPPPK.KGLGGGGgDK.....",
        "......................KPlPPPPpDK.KGLGGGGgDK.....",
        "..........a...........KPlPPPPpDK.KGLGGGGgDK.....",
        "......................KPlPPPPpDK.KGLGGGGgDK.....",
        ".......a..............KPlPPPPpDK.KGLGGGGgDK.....",
        "......................KPlPPPPpDK.KGLGGGGgDK.....",
        "............KKKKKKKK..KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPPPPPPPPK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        "...........KPlPPPPpDK.KPlPPPPpDK.KGLGGGGgDK.....",
        ".....KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK..",
        ".....KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK..",
        "................................................",
        "................................................",
        "................................................",
        "................................................",
        "................................................",
        "................................................",
        "................................................",
        "................................................"
      ];
      const chPalette = { 'K':'#1A1A1A', 'D':'#333333', 'P':'#FF2D7A', 'l':'#FFA6C9', 'p':'#D81B60', 'G':'#B5E474', 'L':'#E3F9C6', 'g':'#8DE383', 'R':'#FF2D7A', 'Y':'#FFC107', 'a':'#8DE383' };
      let chBoard = '<g className="eco-robot">', chStar = '<g className="ch-star">';
      chartArt.forEach((r,y)=>{for(let x=0;x<r.length;x++){let c=r[x];if(c!=='.'){let h=`<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${chPalette[c]}"/>`;if(c==='R'||c==='Y')chStar+=h;else chBoard+=h;}}});
      let chHtml = chBoard+'</g>'+chStar+'</g>';

      const kanbanArt = [
        "................................................",
        "................................................",
        "................................................",
        ".......................KKKKK....................",
        ".....................KKFFFFFKK..................",
        "....................KPPPPPPPPPK.................",
        "...................KGGGGGGGGGGGK................",
        "..................KMMMMMMMMMMMMMK...............",
        "..................KMMMMMMMMMMMMMK...............",
        "..................KMMMMMMMMMMMMMK...............",
        "..................KMMMMMMMMMMMMMK...............",
        "..................KKKKKKKKKKKKKKK...............",
        "..................KLLLLLLLLLLLLLK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KKKKKKKKKKKKKKK...............",
        "..................KLLLLLLLLLLLLLK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KKKKKKKKKKKKKKK...............",
        "..................KLLLLLLLLLLLLLK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMYYMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMKKKKKMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KLMMMMMMMMMMmDK...............",
        "..................KKKKKKKKKKKKKKK...............",
        "...................KKK.......KKK................",
        "...................KKK.......KKK................",
        "................................................",
        "................................................",
        "................................................"
      ];
      const kbPalette = { 'K':'#1A1A1A', 'M':'#94A3B8', 'm':'#64748B', 'L':'#E2E8F0', 'D':'#475569', 'P':'#FF2D7A', 'G':'#8DE383', 'Y':'#FFC107', 'F':'#FFC107' };
      let kbBoard = '<g className="eco-robot">', kbFolders = '<g className="folders-anim">';
      kanbanArt.forEach((r,y)=>{
        for(let x=0;x<r.length;x++){
          let c=r[x];
          if(c!=='.'){
            let h=`<rect x="${x}" y="${y}" width="1.05" height="1.05" fill="${kbPalette[c]}"/>`;
            if(c==='P'||c==='G'||c==='F'||(c==='K'&&y<10)) kbFolders+=h;
            else kbBoard+=h;
          }
        }
      });
      let kbHtml = kbBoard+'</g>'+kbFolders+'</g>';

      console.log(JSON.stringify({
        houseHtml,
        troHtml,
        ecoHtml,
        pdHtml,
        psHtml,
        aiHtml,
        lcHtml,
        vvHtml,
        zHtml,
        chHtml,
        kbHtml
      }));
