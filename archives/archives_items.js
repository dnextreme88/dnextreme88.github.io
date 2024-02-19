const items = [
    {
        name: 'Ecko Pants',
        price: 250,
        condition: 'new',
        size: '36',
        dateSold: '2014-11-07',
        imageLocation: '2014/ecko1-1.jpg'
    },
    {
        name: 'Quiksilver Pants',
        price: 250,
        condition: 'new',
        size: '36',
        dateSold: '2014-12-02',
        imageLocation: '2014/quiksilver1-1.jpg'
    },
    {
        name: 'Mossimo Shirt',
        price: 250,
        condition: 'new',
        size: 'L',
        dateSold: '2015-02-19',
        imageLocation: '2015/mossimo1-1.jpg'
    },
    {
        name: 'Dolce and Gabanna Shirt',
        price: 250,
        condition: 'new',
        size: 'XL',
        dateSold: '2015-02-19',
        imageLocation: '2015/dolce-and-gabanna1-1.jpg'
    },
    {
        name: 'Tender Juicy Freebies',
        price: 70,
        condition: 'new',
        size: 'N/A',
        dateSold: '2015-02-19',
        imageLocation: '2015/tender-juicy1-1.jpg'
    },
    {
        name: 'Ecko Polo',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2015-02-20',
        imageLocation: '2015/ecko2-1.jpg'
    },
    {
        name: 'Ecko Shirt',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2015-02-27',
        imageLocation: '2015/ecko3-1.jpg'
    },
    {
        name: 'Phat Farm Pants',
        price: 150,
        condition: 'used',
        size: '34',
        dateSold: '2015-03-04',
        imageLocation: '2015/phat-farm1-1.jpg'
    },
    {
        name: 'Phat Farm Polo',
        price: 200,
        condition: 'used',
        size: 'XXL',
        dateSold: '2015-06-25',
        imageLocation: '2015/phat-farm2-1.jpg'
    },
    {
        name: 'Panasonic RP-HS9 Stereo Earphones',
        price: 300,
        condition: 'used',
        size: 'N/A',
        dateSold: '2015-07-01',
        imageLocation: '2015/panasonic1-1.jpg'
    },
    {
        name: 'Ecko Hoodies',
        price: 400,
        condition: 'used',
        size: 'XL',
        dateSold: '2015-07-23',
        imageLocation: '2015/ecko4-1.jpg'
    },
    {
        name: 'Tribal Shirt',
        price: 250,
        condition: 'used',
        size: 'L',
        dateSold: '2015-07-23',
        imageLocation: '2015/tribal1-1.jpg'
    },
    {
        name: 'RRJ Shirt',
        price: 150,
        condition: 'used',
        size: 'XL',
        dateSold: '2015-07-23',
        imageLocation: '2015/rrj1-1.jpg'
    },
    {
        name: 'Pelle Pelle Shirt',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2015-07-23',
        imageLocation: '2015/pelle-pelle1-1.jpg'
    },
    {
        name: 'Uniqlo Polo',
        price: 200,
        condition: 'new',
        size: 'L',
        dateSold: '2015-09-25',
        imageLocation: '2015/uniqlo1-1.jpg'
    },
    {
        name: 'FUBU Sweatshirt',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2015-09-25',
        imageLocation: '2015/fubu1-1.jpg'
    },
    {
        name: 'Giordano Polo',
        price: 100,
        condition: 'used',
        size: 'M',
        dateSold: '2015-09-25',
        imageLocation: '2015/giordano1-1.jpg'
    },
    {
        name: 'Dragonplus PSP Analog Stick Kit',
        price: 300,
        condition: 'new',
        size: 'N/A',
        dateSold: '2015-12-17',
        imageLocation: '2015/dragonplus1-1.jpg'
    },
    {
        name: 'College Algebra 4th Edition Book',
        price: 250,
        condition: 'used',
        size: 'N/A',
        dateSold: '2016-01-24',
        imageLocation: '2016/book1-1.jpg'
    },
    {
        name: 'Lee Sweatshirt',
        price: 250,
        condition: 'used',
        size: 'L',
        dateSold: '2016-02-26',
        imageLocation: '2016/lee1-1.jpg'
    },
    {
        name: 'Uniqlo Shirt',
        price: 250,
        condition: 'used',
        size: 'XL',
        dateSold: '2016-02-26',
        imageLocation: '2016/uniqlo2-1.jpg'
    },
    {
        name: 'Phat Farm Shirt',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2016-02-26',
        imageLocation: '2016/phat-farm3-1.jpg'
    },
    {
        name: 'FUBU Hoodies',
        price: 250,
        condition: 'used',
        size: 'M',
        dateSold: '2016-03-21',
        imageLocation: '2016/fubu2-1.jpg'
    },
    {
        name: 'Plane and Spherical Trigonometry Book',
        price: 150,
        condition: 'used',
        size: 'N/A',
        dateSold: '2016-04-10',
        imageLocation: '2016/book2-1.jpg'
    },
    {
        name: '2002 FIFA World Cup Emblems',
        price: 500,
        condition: 'new',
        size: 'N/A',
        dateSold: '2016-05-17',
        imageLocation: '2016/emblems1-1.jpg'
    },
    {
        name: 'Nautica Jeans Polo',
        price: 350,
        condition: 'new',
        size: 'XXL',
        notes: 'Received payment from Buyer through Palawan Express on 5/31, missing receipt.',
        dateSold: '2016-06-01',
        imageLocation: '2016/nautica-jeans1-1.jpg'
    },
    {
        name: 'Marks and Spencer Polo',
        price: 150,
        condition: 'used',
        size: 'M or L',
        dateSold: '2016-07-18',
        imageLocation: '2016/marks-and-spencer1-1.jpg'
    },
    {
        name: 'FUBU Jacket',
        price: 350,
        condition: 'used',
        size: 'M',
        dateSold: '2016-07-19',
        imageLocation: '2016/fubu3-1.jpg'
    },
    {
        name: 'Phat Farm Pants',
        price: 250,
        condition: 'used',
        size: '34',
        dateSold: '2016-07-21',
        imageLocation: '2016/phat-farm4-1.jpg'
    },
    {
        name: 'Oreo Freebies',
        price: 50,
        condition: 'new',
        size: 'N/A',
        dateSold: '2016-08-12',
        imageLocation: '2016/oreo1-1.jpg'
    },
    {
        name: 'Samsung S5 S View Flip Cover',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2016-08-13',
        imageLocation: '2016/samsung1-1.jpg'
    },
    {
        name: 'Crooks and Castles Shirt',
        price: 400,
        condition: 'used',
        size: 'L',
        dateSold: '2016-09-17',
        imageLocation: '2016/crooks-and-castles1-1.jpg'
    },
    {
        name: 'T Bar Shirt',
        price: 250,
        condition: 'new',
        size: 'M',
        dateSold: '2017-01-03',
        imageLocation: '2017/t-bar1-1.jpg'
    },
    {
        name: 'Philippine Flag Keychain',
        price: 50,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-01-03',
        imageLocation: '2017/keychain1-1.jpg'
    },
    {
        name: 'Burberry Polo',
        price: 350,
        condition: 'used',
        size: 'XL',
        dateSold: '2017-01-03',
        imageLocation: '2017/burberry1-1.jpg'
    },
    {
        name: 'Black Burmese Cat',
        price: 350,
        condition: 'healthy',
        size: 'N/A',
        notes: 'Not dewormed/vaccinated.',
        dateSold: '2017-03-04',
        imageLocation: '2017/cat1-1.jpg'
    },
    {
        name: 'Omega Houseware Tumbler',
        price: 100,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-03-04',
        imageLocation: '2017/tumbler1-1.jpg'
    },
    {
        name: 'Tribal Pants',
        price: 200,
        condition: 'used',
        size: '36',
        dateSold: '2017-06-07',
        imageLocation: '2017/tribal2-1.jpg'
    },
    {
        name: 'Lacoste Polo',
        price: 350,
        condition: 'new',
        size: 'M or L',
        dateSold: '2017-06-10',
        imageLocation: '2017/lacoste1-1.jpg'
    },
    {
        name: 'Delkin HS-300 Leather Headset',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-06-24',
        imageLocation: '2017/headset1-1.jpg'
    },
    {
        name: 'Ecko Shirt',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2017-06-29',
        imageLocation: '2017/ecko5-1.jpg'
    },
    {
        name: 'Lacoste Sweatshirt',
        price: 500,
        condition: 'new',
        size: 'M',
        dateSold: '2017-07-08',
        imageLocation: '2017/lacoste2-1.jpg'
    },
    {
        name: 'G-Star Bomber Jacket',
        price: 700,
        condition: 'new',
        size: 'M',
        dateSold: '2017-07-20',
        imageLocation: '2017/g-star1-1.jpg'
    },
    {
        name: 'Phat Farm Hoodies',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2017-08-13',
        imageLocation: '2017/phat-farm5-1.jpg'
    },
    {
        name: 'Wrangler Pants',
        price: 200,
        condition: 'used',
        size: '38',
        dateSold: '2017-08-18',
        imageLocation: '2017/wrangler1-1.jpg'
    },
    {
        name: 'Rotring Drawing Tube',
        price: 50,
        condition: 'used',
        size: 'N/A',
        dateSold: '2017-09-02',
        imageLocation: '2017/rotring1-1.jpg'
    },
    {
        name: 'Adidas Hoodies',
        price: 200,
        condition: 'new',
        size: 'L',
        notes: 'Sold to Noel.',
        dateSold: '2017-09-04',
        imageLocation: '2017/adidas1-1.jpg'
    },
    {
        name: 'Soft Blue Polo',
        price: 150,
        condition: 'new',
        size: 'XXL',
        dateSold: '2017-09-19',
        imageLocation: '2017/soft-blue1-1.jpg'
    },
    {
        name: 'Adidas Drawstring Bag',
        price: 150,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-10-02',
        imageLocation: '2017/adidas2-1.jpg'
    },
    {
        name: 'Nintendo DS Lite Handheld',
        price: 1200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-10-18',
        imageLocation: '2017/nintendo1-1.jpg'
    },
    {
        name: 'Calvin Klein Euphoria Perfume',
        price: 1300,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-10-21',
        imageLocation: '2017/calvin-klein1-1.jpg'
    },
    {
        name: 'Fujifilm Instax Mini 7 Camera',
        price: 900,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-11-07',
        imageLocation: '2017/fujifilm1-1.jpg'
    },
    {
        name: 'Adidas Predito Shoes',
        price: 400,
        condition: 'used',
        size: '12 US',
        dateSold: '2017-12-02',
        imageLocation: '2017/adidas3-1.jpg'
    },
    {
        name: 'South Pole Hoodies',
        price: 200,
        condition: 'new',
        size: 'M',
        dateSold: '2017-12-03',
        imageLocation: '2017/south-pole1-1.jpg'
    },
    {
        name: 'David Beckham The Essence Perfume',
        price: 1100,
        condition: 'new',
        size: 'N/A',
        dateSold: '2017-12-13',
        imageLocation: '2017/david-beckham1-1.jpg'
    },
    {
        name: 'K-Zone May 2008 Issue Magazine',
        price: 220,
        condition: 'used',
        size: 'N/A',
        dateSold: '2018-01-24',
        imageLocation: '2018/magazine1-1.jpg'
    },
    {
        name: 'Nike Shorts',
        price: 150,
        condition: 'new',
        size: 'L',
        dateSold: '2018-01-25',
        imageLocation: '2018/nike1-1.jpg'
    },
    {
        name: 'Lee Shorts',
        price: 100,
        condition: 'new',
        size: 'XXL',
        dateSold: '2018-03-28',
        imageLocation: '2018/lee2-1.jpg'
    },
    {
        name: 'Ecko Windbreaker Jacket',
        price: 200,
        condition: 'new',
        size: 'L',
        dateSold: '2018-03-29',
        imageLocation: '2018/ecko6-1.jpg'
    },
    {
        name: 'RMC Pants',
        price: 150,
        condition: 'used',
        size: '36',
        dateSold: '2018-04-07',
        imageLocation: '2018/rmc1-1.jpg'
    },
    {
        name: 'Corsair CMX512 2GB DDR2 RAM',
        price: 250,
        condition: 'used',
        size: 'N/A',
        dateSold: '2018-07-05',
        imageLocation: '2018/corsair1-1.jpg'
    },
    {
        name: 'A Wrinkle in Time Book',
        price: 350,
        condition: 'new',
        size: 'N/A',
        dateSold: '2018-07-09',
        imageLocation: '2018/book3-1.jpg'
    },
    {
        name: 'Alstyle Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        dateSold: '2018-07-10',
        imageLocation: '2018/alstyle1-1.jpg'
    },
    {
        name: 'Ergophobia Pants',
        price: 150,
        condition: 'used',
        size: '33',
        dateSold: '2018-07-10',
        imageLocation: '2018/ergophobia1-1.jpg'
    },
    {
        name: 'Adidas Hoodies',
        price: 150,
        condition: 'new',
        size: 'M or L',
        dateSold: '2018-09-01',
        imageLocation: '2018/adidas4-1.jpg'
    },
    {
        name: 'Universal Studios Cap',
        price: 150,
        condition: 'new',
        size: 'N/A',
        notes: 'Sold to Alyza.',
        dateSold: '2018-09-24',
        imageLocation: '2018/cap1-1.jpg'
    },
    {
        name: 'Pokemon Drawstring Bag',
        price: 100,
        condition: 'new',
        size: 'N/A',
        dateSold: '2018-09-29',
        imageLocation: '2018/pokemon1-1.jpg'
    },
    {
        name: 'Le Froge Shirt',
        price: 150,
        condition: 'new',
        size: 'M',
        notes: 'Sold to Alyza.',
        dateSold: '2018-10-06',
        imageLocation: '2018/le-froge1-1.jpg'
    },
    {
        name: 'Converse Shirt',
        price: 250,
        condition: 'used',
        size: 'L',
        notes: 'Received payment from Buyer through Palawan Express on 10/13, missing receipt.',
        dateSold: '2018-10-13',
        imageLocation: '2018/converse1-1.jpg'
    },
    {
        name: 'Tribal Pants',
        price: 150,
        condition: 'used',
        size: '36',
        dateSold: '2018-12-17',
        imageLocation: '2018/tribal3-1.jpg'
    },
    {
        name: 'Ralph Lauren Sweater',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2018-12-18',
        imageLocation: '2018/ralph-lauren1-1.jpg'
    },
    {
        name: 'Adidas Shirt',
        price: 150,
        condition: 'used',
        size: 'XL',
        dateSold: '2018-12-18',
        imageLocation: '2018/adidas5-1.jpg'
    },
    {
        name: 'Mossimo Shirt',
        price: 150,
        condition: 'used',
        size: 'L',
        dateSold: '2018-12-18',
        imageLocation: '2018/mossimo2-1.jpg'
    },
    {
        name: 'A Tale of Two Cities Book',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2019-01-07',
        imageLocation: '2019/book4-1.jpg'
    },
    {
        name: 'Tapout Shirt',
        price: 250,
        condition: 'new',
        size: 'M',
        dateSold: '2019-01-20',
        imageLocation: '2019/tapout1-1.jpg'
    },
    {
        name: 'Ecko Hoodies',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2019-02-12',
        imageLocation: '2019/ecko7-1.jpg'
    },
    {
        name: 'Samsung S5 Phone',
        price: 400,
        condition: 'used',
        size: 'N/A',
        dateSold: '2019-04-09',
        imageLocation: '2019/samsung2-1.jpg'
    },
    {
        name: 'Ecko Hoodies',
        price: 300,
        condition: 'new',
        size: 'XL',
        dateSold: '2019-04-17',
        imageLocation: '2019/ecko8-1.jpg'
    },
    {
        name: 'Ecko Shirt',
        price: 150,
        condition: 'new',
        size: 'L or XL',
        notes: 'Dropped by Alyza. Buyer picked up on 4/22. Payment picked up on 4/23.',
        dateSold: '2019-04-22',
        imageLocation: '2019/ecko9-1.jpg'
    },
    {
        name: 'ZOTAC GeForce GTX 750 Video Card',
        price: 2000,
        condition: 'new',
        size: 'N/A',
        dateSold: '2019-05-12',
        imageLocation: '2019/video-card1-1.jpg'
    },
    {
        name: 'Dockers Shorts',
        price: 100,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 5/22. Payment picked up on 5/22.',
        dateSold: '2019-05-22',
        imageLocation: '2019/dockers1-1.jpg'
    },
    {
        name: 'Weatherproof Jacket',
        price: 100,
        condition: 'new',
        size: 'S',
        dateSold: '2019-05-23',
        imageLocation: '2019/weatherproof1-1.jpg'
    },
    {
        name: 'Tapout Shirt',
        price: 500,
        condition: 'new',
        size: 'XL',
        dateSold: '2019-05-25',
        imageLocation: '2019/tapout2-1.jpg'
    },
    {
        name: 'The North Face Bomber Jacket',
        price: 350,
        condition: 'used',
        size: 'L',
        dateSold: '2019-08-10',
        imageLocation: '2019/the-north-face1-1.jpg'
    },
    {
        name: 'Umbro Jogging Pants',
        price: 150,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 9/11. Payment picked up on 9/12.',
        dateSold: '2019-09-08',
        imageLocation: '2019/umbro1-1.jpg'
    },
    {
        name: 'Folded and Hung Pants',
        price: 200,
        condition: 'new',
        size: '34',
        notes: 'Buyer picked up on 9/16. Payment picked up on 9/16.',
        dateSold: '2019-09-15',
        imageLocation: '2019/folded-and-hung1-1.jpg'
    },
    {
        name: 'HyperX Cloud Alpha Headset',
        price: 3700,
        condition: 'new',
        size: 'N/A',
        dateSold: '2019-09-16',
        imageLocation: '2019/hyperx1-1.jpg'
    },
    {
        name: 'FUBU Pants',
        price: 300,
        condition: 'new',
        size: '36',
        notes: 'Buyer picked up on 9/17. Payment picked up on 9/17.',
        dateSold: '2019-09-16',
        imageLocation: '2019/fubu4-1.jpg'
    },
    {
        name: 'Jerzees Hoodies',
        price: 200,
        condition: 'used',
        size: 'XL',
        dateSold: '2019-09-21',
        imageLocation: '2019/jerzees1-1.jpg'
    },
    {
        name: 'PGA Tours Polo',
        price: 300,
        condition: 'new',
        size: 'M or L',
        dateSold: '2019-09-30',
        imageLocation: '2019/pga1-1.jpg'
    },
    {
        name: 'Pujiqing Bomber Jacket',
        price: 500,
        condition: 'new',
        size: 'XXL',
        dateSold: '2019-09-30',
        imageLocation: '2019/pujiqing1-1.jpg'
    },
    {
        name: 'Jag Shirt',
        price: 200,
        condition: 'new',
        size: 'M',
        notes: 'Originally dropped on GP Arcade Stall 4 Room 211 on 9/21 however was not claimed. New buyer picked up on 10/2. Payment picked up on 10/3.',
        dateSold: '2019-10-02',
        imageLocation: '2019/jag1-1.jpg'
    },
    {
        name: 'Intex Supernova Mid-Gaming CPU',
        price: 2300,
        condition: 'used',
        size: 'N/A',
        dateSold: '2019-11-07',
        imageLocation: '2019/intex1-1.jpg'
    },
    {
        name: 'FUBU Shirt',
        price: 250,
        condition: 'used',
        size: 'XL',
        dateSold: '2019-11-17',
        imageLocation: '2019/fubu5-1.jpg'
    },
    {
        name: 'Everlast Sweatshirt',
        price: 200,
        condition: 'used',
        size: 'L',
        notes: 'Buyer picked up on 2/5. Payment picked up on 2/10.',
        dateSold: '2020-02-05',
        imageLocation: '2020/everlast1-1.jpg'
    },
    {
        name: 'HyperX 4GB DDR3 RAM',
        price: 800,
        condition: 'new',
        size: 'N/A',
        dateSold: '2020-03-14',
        imageLocation: '2020/hyperx2-1.jpg'
    },
    {
        name: 'The North Face Bomber Jacket',
        price: 700,
        condition: 'new',
        size: 'M or L',
        notes: 'Shipped by Mama Cathy. 1st transaction where payment was sent through GCash on 5/2 and shipped through ABEST Express on 5/7. Received payment on 5/11.',
        dateSold: '2020-05-07',
        imageLocation: '2020/the-north-face2-1.jpg'
    },
    {
        name: 'Human Genes Pants',
        price: 150,
        condition: 'new',
        size: '33',
        dateSold: '2020-06-15',
        imageLocation: '2020/human-genes1-1.jpg'
    },
    {
        name: 'Altec Lansing 120i Speakers',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2020-06-27',
        imageLocation: '2020/speakers1-1.jpg'
    },
    {
        name: 'Genius MIC-01A Desktop Microphone',
        price: 150,
        condition: 'used',
        size: 'N/A',
        dateSold: '2020-07-02',
        imageLocation: '2020/mic1-1.jpg'
    },
    {
        name: 'Carhartt Shirt',
        price: 150,
        condition: 'used',
        size: 'XL or XXL',
        dateSold: '2020-07-05',
        imageLocation: '2020/carhartt1-1.jpg'
    },
    {
        name: 'LG 16M38A-B Monitor',
        price: 1300,
        condition: 'new',
        size: '15.6 inches',
        dateSold: '2020-08-01',
        imageLocation: '2020/lg1-1.jpg'
    },
    {
        name: 'A4Tech HS-5P Stereo Headset',
        price: 300,
        condition: 'new',
        size: 'N/A',
        dateSold: '2020-08-17',
        imageLocation: '2020/a4tech1-1.jpg'
    },
    {
        name: 'Nike Shirt',
        price: 100,
        condition: 'new',
        size: 'M or L',
        dateSold: '2020-09-22',
        imageLocation: '2020/nike2-1.jpg'
    },
    {
        name: 'Old Navy Pants',
        price: 100,
        condition: 'new',
        size: '34',
        dateSold: '2020-09-22',
        imageLocation: '2020/old-navy1-1.jpg'
    },
    {
        name: 'Jag Shirt',
        price: 150,
        condition: 'new',
        size: 'M',
        dateSold: '2020-09-22',
        imageLocation: '2020/jag2-1.jpg'
    },
    {
        name: 'Tribal Shirt',
        price: 350,
        condition: 'new',
        size: 'M',
        dateSold: '2020-09-24',
        imageLocation: '2020/tribal4-1.jpg'
    },
    {
        name: 'Gildan Shirt',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2020-09-24',
        imageLocation: '2020/gildan1-1.jpg'
    },
    {
        name: 'Softex Shirt',
        price: 100,
        condition: 'new',
        size: 'XXL',
        dateSold: '2020-09-26',
        imageLocation: '2020/softex1-1.jpg'
    },
    {
        name: 'Semir Polo',
        price: 150,
        condition: 'new',
        size: 'XL',
        dateSold: '2020-09-27',
        imageLocation: '2020/semir1-1.jpg'
    },
    {
        name: 'Adidas Shirt',
        price: 150,
        condition: 'used',
        size: 'XL',
        dateSold: '2020-10-12',
        imageLocation: '2020/adidas6-1.jpg'
    },
    {
        name: 'Enyce Shirt',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2020-10-12',
        imageLocation: '2020/enyce1-1.jpg'
    },
    {
        name: 'Tribal Shirt',
        price: 150,
        condition: 'used',
        size: 'XL',
        dateSold: '2020-10-12',
        imageLocation: '2020/tribal5-1.jpg'
    },
    {
        name: 'Marks and Spencer Polo',
        price: 200,
        condition: 'used',
        size: 'M or L',
        dateSold: '2020-10-26',
        imageLocation: '2020/marks-and-spencer2-1.jpg'
    },
    {
        name: 'Adidas Shirt',
        price: 200,
        condition: 'new',
        size: 'XXL',
        dateSold: '2020-11-23',
        imageLocation: '2020/adidas7-1.jpg'
    },
    {
        name: 'FUBU Polo',
        price: 150,
        condition: 'new',
        size: 'XL',
        dateSold: '2020-11-24',
        imageLocation: '2020/fubu6-1.jpg'
    },
    {
        name: 'Ecko Hoodies',
        price: 300,
        condition: 'new',
        size: 'XL',
        dateSold: '2020-12-18',
        imageLocation: '2020/ecko10-1.jpg'
    },
    {
        name: 'Reebok Hoodies',
        price: 250,
        condition: 'new',
        size: 'L',
        dateSold: '2020-12-29',
        imageLocation: '2020/reebok1-1.jpg'
    },
    {
        name: 'Cape Juby Bomber Jacket',
        price: 200,
        condition: 'used',
        size: 'M',
        dateSold: '2021-01-03',
        imageLocation: '2021/cape-juby1-1.jpg'
    },
    {
        name: 'Jag Jacket',
        price: 200,
        condition: 'used',
        size: 'L',
        dateSold: '2021-01-18',
        imageLocation: '2021/jag3-1.jpg'
    },
    {
        name: 'Gap Polo',
        price: 200,
        condition: 'new',
        size: 'L',
        dateSold: '2021-01-19',
        imageLocation: '2021/gap1-1.jpg'
    },
    {
        name: 'Penshoppe Jacket',
        price: 200,
        condition: 'used',
        size: 'L',
        notes: 'Sold to Algiroj.',
        dateSold: '2021-01-28',
        imageLocation: '2021/penshoppe1-1.jpg'
    },
    {
        name: 'Old Navy Jacket',
        price: 150,
        condition: 'new',
        size: 'XL',
        dateSold: '2021-03-08',
        imageLocation: '2021/old-navy2-1.jpg'
    },
    {
        name: 'H and M Bomber Jacket',
        price: 300,
        condition: 'new',
        size: 'XL',
        dateSold: '2021-04-17',
        imageLocation: '2021/h-and-m1-1.jpg'
    },
    {
        name: 'Nike Camo Cycling Shorts',
        price: 250,
        condition: 'new',
        size: 'XXL',
        notes: 'Dropped in Buyer\'s Malcolm Square dropping area. Payment picked up on Buyer\'s dropping area.',
        dateSold: '2021-06-13',
        imageLocation: '2021/nike3-1.jpg'
    },
    {
        name: 'Nike Camo Cycling Shorts',
        price: 250,
        condition: 'new',
        size: 'XXL',
        notes: 'Buyer picked up on 6/14. Payment picked up on 6/14.',
        dateSold: '2021-06-13',
        imageLocation: '2021/nike4-1.jpg'
    },
    {
        name: 'Philips SBC HC8545 Wireless Headset',
        price: 100,
        condition: 'new',
        size: 'N/A',
        notes: 'Buyer picked up on 6/26. Payment picked up on 6/30.',
        dateSold: '2021-06-25',
        imageLocation: '2021/philips1-1.jpg'
    },
    {
        name: 'Everlast Shirt',
        price: 250,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 6/26. Payment picked up on 6/30.',
        dateSold: '2021-06-25',
        imageLocation: '2021/everlast2-1.jpg'
    },
    {
        name: 'Philips Lampshade',
        price: 150,
        condition: 'used',
        size: 'N/A',
        notes: 'Buyer picked up on 6/30. Payment picked up on 7/2.',
        dateSold: '2021-06-30',
        imageLocation: '2021/philips2-1.jpg'
    },
    {
        name: 'Looney Tunes Yosemite Sam Cap',
        price: 200,
        condition: 'new',
        size: 'N/A',
        notes: 'Buyer picked up on 7/9. Payment picked up on 7/11.',
        dateSold: '2021-07-08',
        imageLocation: '2021/cap2-1.jpg'
    },
    {
        name: 'LP Support Fitness Gloves',
        price: 250,
        condition: 'new',
        size: 'N/A',
        notes: 'Buyer picked up on 8/5. Payment picked up on 8/9.',
        dateSold: '2021-07-23',
        imageLocation: '2021/gloves1-1.jpg'
    },
    {
        name: 'BNY Jeans Shirt',
        price: 200,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-23',
        imageLocation: '2021/bny-jeans1-1.jpg'
    },
    {
        name: 'Tribal Shirt',
        price: 100,
        condition: 'used',
        size: 'M',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-23',
        imageLocation: '2021/tribal6-1.jpg'
    },
    {
        name: 'Greendog Camo Shorts',
        price: 100,
        condition: 'used',
        size: 'M',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-26',
        imageLocation: '2021/greendog1-1.jpg'
    },
    {
        name: 'Nike Camo Jogging Pants',
        price: 100,
        condition: 'new',
        size: 'M or L',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-26',
        imageLocation: '2021/nike5-1.jpg'
    },
    {
        name: 'Pour Homme Camo Pants',
        price: 200,
        condition: 'new',
        size: 'L or XL',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-26',
        imageLocation: '2021/pour-homme1-1.jpg'
    },
    {
        name: 'Pour Homme Camo Pants',
        price: 200,
        condition: 'new',
        size: 'L or XL',
        notes: 'Buyer picked up on 8/28. Payment picked up on 8/29.',
        dateSold: '2021-08-26',
        imageLocation: '2021/pour-homme2-1.jpg'
    },
    {
        name: 'HDMI to HDMI VGA Adapter Cable',
        price: 500,
        condition: 'new',
        size: 'N/A',
        dateSold: '2021-09-11',
        imageLocation: '2021/cable1-1.jpg'
    },
    {
        name: 'Nike Jogging Pants',
        price: 200,
        condition: 'new',
        size: 'M or L',
        notes: 'Buyer picked up on 9/28. Payment picked up on 10/1.',
        dateSold: '2021-09-27',
        imageLocation: '2021/nike6-1.jpg'
    },
    {
        name: 'Adidas Shorts',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 10/2. Payment picked up on 10/3.',
        dateSold: '2021-10-01',
        imageLocation: '2021/adidas8-1.jpg'
    },
    {
        name: 'Ecko Shorts',
        price: 100,
        condition: 'used',
        size: '36',
        notes: 'Buyer picked up on 4/8. Payment picked up on 4/9.',
        dateSold: '2022-04-07',
        imageLocation: '2022/ecko11-1.jpg'
    },
    {
        name: 'Bauhn Auricle Noise Cancellation Headset',
        price: 200,
        condition: 'used',
        size: 'N/A',
        notes: 'Buyer picked up on 6/21. Payment picked up on 6/25.',
        dateSold: '2022-06-21',
        imageLocation: '2022/bauhn1-1.jpg'
    },
    {
        name: 'Penshoppe Polo',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 6/24. Payment picked up on 6/25.',
        dateSold: '2022-06-24',
        imageLocation: '2022/penshoppe2-1.jpg'
    },
    {
        name: 'U2 Polo',
        price: 150,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 6/24. Payment picked up on 6/25.',
        dateSold: '2022-06-24',
        imageLocation: '2022/u2-1-1.jpg'
    },
    {
        name: 'Apple iPad Mini 1st Generation Tablet',
        price: 2000,
        condition: 'used',
        size: 'N/A',
        dateSold: '2022-07-10',
        imageLocation: '2022/apple1-1.jpg'
    },
    {
        name: 'Samsung Galaxy Tab 3 Lite Tablet',
        price: 2000,
        condition: 'used',
        size: 'N/A',
        dateSold: '2022-07-16',
        imageLocation: '2022/samsung3-1.jpg'
    },
    {
        name: 'Mishka NYC Death Adders Cap',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2022-07-28',
        imageLocation: '2022/cap3-1.jpg'
    },
    {
        name: 'League of Legends Lanyard',
        price: 50,
        condition: 'new',
        size: 'N/A',
        dateSold: '2022-07-31',
        imageLocation: '2022/league-of-legends1-1.jpg'
    },
    {
        name: 'Special Force Lanyard',
        price: 50,
        condition: 'new',
        size: 'N/A',
        dateSold: '2022-07-31',
        imageLocation: '2022/special-force1-1.jpg'
    },
    {
        name: 'LG E2041 Monitor',
        price: 2000,
        condition: 'used',
        size: '20 inches',
        dateSold: '2022-08-13',
        imageLocation: '2022/lg2-1.jpg'
    },
    {
        name: 'Banana Republic Polo',
        price: 200,
        condition: 'new',
        size: 'M',
        dateSold: '2022-08-15',
        imageLocation: '2022/banana-republic1-1.jpg'
    },
    {
        name: 'IZOD Polo',
        price: 150,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 8/18. Payment picked up on 8/21.',
        dateSold: '2022-08-15',
        imageLocation: '2022/izod1-1.jpg'
    },
    {
        name: 'Cukui Shirt',
        price: 150,
        condition: 'new',
        size: 'XXL',
        notes: 'Buyer picked up on 9/7. Payment picked up on 9/10.',
        dateSold: '2022-09-06',
        imageLocation: '2022/cukui1-1.jpg'
    },
    {
        name: 'LG E1941 Monitor',
        price: 1000,
        condition: 'new',
        size: '18.5 inches',
        dateSold: '2022-09-12',
        imageLocation: '2022/lg3-1.jpg'
    },
    {
        name: 'Descente Jacket',
        price: 500,
        condition: 'new',
        size: 'L',
        notes: 'Shipped via LBC. 1st cash-on-delivery transaction. Received payment on 9/21.',
        dateSold: '2022-09-17',
        imageLocation: '2022/descente1-1.jpg'
    },
    {
        name: 'Crooks and Castles Shirt',
        price: 200,
        condition: 'used',
        size: 'L',
        dateSold: '2022-09-17',
        imageLocation: '2022/crooks-and-castles2-1.jpg'
    },
    {
        name: 'Habit Outdoors Jacket',
        price: 250,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 10/8. Payment sent through GCash on 10/1. Received payment on 10/11.',
        dateSold: '2022-10-08',
        imageLocation: '2022/habit-outdoors1-1.jpg'
    },
    {
        name: 'ASUS Zenfone Max 4 Phone',
        price: 350,
        condition: 'used',
        size: 'N/A',
        notes: 'Shipped via LBC. Cash-on-delivery. Received payment on 10/25.',
        dateSold: '2022-10-22',
        imageLocation: '2022/asus1-1.jpg'
    },
    {
        name: 'American Apparel Shirt',
        price: 200,
        condition: 'used',
        size: 'M',
        notes: 'Buyer picked up on 10/28. Payment picked up on 11/5.',
        dateSold: '2022-10-25',
        imageLocation: '2022/american-apparel1-1.jpg'
    },
    {
        name: 'TEAMGROUP T-Force 8GB DDR4 RAM',
        price: 1700,
        condition: 'used',
        size: 'N/A',
        notes: 'P500 initially paid through GCash on 1/26. Received P1,200 on meetup.',
        dateSold: '2023-01-28',
        imageLocation: '2023/teamgroup1-1.jpg'
    },
    {
        name: 'Lynx Jacket',
        price: 150,
        condition: 'used',
        size: 'L',
        notes: 'Buyer picked up on 2/8. Payment sent through GCash on 2/7. Received payment on 2/11.',
        dateSold: '2023-02-05',
        imageLocation: '2023/lynx1-1.jpg'
    },
    {
        name: 'Crooks and Castles Shirt',
        price: 250,
        condition: 'used',
        size: 'M',
        notes: 'Buyer picked up on 2/13. Payment picked up on 2/19.',
        dateSold: '2023-02-13',
        imageLocation: '2023/crooks-and-castles3-1.jpg'
    },
    {
        name: 'Crooks and Castles Shirt',
        price: 250,
        condition: 'used',
        size: 'L',
        notes: 'Buyer picked up on 2/13. Payment picked up on 2/19.',
        dateSold: '2023-02-13',
        imageLocation: '2023/crooks-and-castles4-1.jpg'
    },
    {
        name: 'Anvil Shirt',
        price: 200,
        condition: 'used',
        size: 'L',
        notes: 'Buyer picked up on 3/12. Payment sent through GCash on 3/5. Received payment on 3/14.',
        dateSold: '2023-02-13',
        imageLocation: '2023/anvil1-1.jpg'
    },
    {
        name: 'Miniso Earphones',
        price: 200,
        condition: 'new',
        size: 'N/A',
        notes: 'Dropped in Buyer\'s Diego Silang Street dropping area. Payment picked up on Buyer\'s dropping area.',
        dateSold: '2023-02-15',
        imageLocation: '2023/miniso1-1.jpg'
    },
    {
        name: 'League of Legends 2014 World Championship Jacket',
        price: 700,
        condition: 'new',
        size: 'S',
        dateSold: '2023-02-21',
        imageLocation: '2023/league-of-legends2-1.jpg'
    },
    {
        name: 'Tapout Shirt',
        price: 250,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 2/23. Payment picked up on 2/25.',
        dateSold: '2023-02-21',
        imageLocation: '2023/tapout3-1.jpg'
    },
    {
        name: 'American Eagle Outfitters Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 2/23. Payment picked up on 2/25.',
        dateSold: '2023-02-21',
        imageLocation: '2023/american-eagle-outfitters1-1.jpg'
    },
    {
        name: 'American Eagle Outfitters Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 2/23. Payment picked up on 2/25.',
        dateSold: '2023-02-21',
        imageLocation: '2023/american-eagle-outfitters2-1.jpg'
    },
    {
        name: 'Florsheim Bristol Leather Shoes',
        price: 600,
        condition: 'used',
        size: '8 US or 9 US',
        notes: 'Sold to Miguel.',
        dateSold: '2023-02-22',
        imageLocation: '2023/florsheim1-1.jpg'
    },
    {
        name: 'ROMOSS 20,000 MAh Powerbank',
        price: 600,
        condition: 'used',
        size: 'N/A',
        notes: 'Buyer picked up on 3/15. Payment picked up on 3/26.',
        dateSold: '2023-03-13',
        imageLocation: '2023/powerbank1-1.jpg'
    },
    {
        name: 'SKMEI Camo Watch',
        price: 250,
        condition: 'new',
        size: 'N/A',
        dateSold: '2023-03-13',
        imageLocation: '2023/skmei1-1.jpg'
    },
    {
        name: 'Motor Visor Helmet',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2023-03-27',
        imageLocation: '2023/motor-visor-helmet1-1.jpg'
    },
    {
        name: 'NYC Shirt',
        price: 200,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 3/31. Payment picked up on 4/11.',
        dateSold: '2023-03-28',
        imageLocation: '2023/nyc1-1.jpg'
    },
    {
        name: 'Reebok Jogging Pants',
        price: 200,
        condition: 'new',
        size: 'M or L',
        notes: 'Buyer picked up on 3/31. Payment picked up on 4/11.',
        dateSold: '2023-03-28',
        imageLocation: '2023/reebok2-1.jpg'
    },
    {
        name: 'Jag Pants',
        price: 250,
        condition: 'new',
        size: '34',
        notes: 'Buyer picked up on 4/4. Payment picked up on 4/11.',
        dateSold: '2023-03-28',
        imageLocation: '2023/jag4-1.jpg'
    },
    {
        name: 'PUBG Bag',
        price: 200,
        condition: 'used',
        size: 'N/A',
        notes: 'Dropped in Buyer\'s Maharlika dropping area. Payment picked up on Buyer\'s dropping area.',
        dateSold: '2023-04-01',
        imageLocation: '2023/pubg1-1.jpg'
    },
    {
        name: 'Call of Duty Ghosts Shirt',
        price: 200,
        condition: 'new',
        size: 'S',
        notes: 'Shipped via LBC. Cash-on-delivery. Received payment on 4/8.',
        dateSold: '2023-04-02',
        imageLocation: '2023/call-of-duty1-1.jpg'
    },
    {
        name: 'Tasman UGG 4115 Boat Shoes',
        price: 700,
        condition: 'new',
        size: '11 US or 12 US',
        notes: 'Shipped via LBC. Cash-on-delivery. Received payment on 4/8.',
        dateSold: '2023-04-02',
        imageLocation: '2023/tasman-ugg1-1.jpg'
    },
    {
        name: 'Bronson Shirt',
        price: 300,
        condition: 'new',
        size: 'XL',
        notes: 'Shipped via LBC. Payment sent through GCash on 4/4. Received payment on 4/6.',
        dateSold: '2023-04-04',
        imageLocation: '2023/bronson1-1.jpg'
    },
    {
        name: 'Gildan Shirt',
        price: 150,
        condition: 'new',
        size: 'L',
        dateSold: '2023-04-11',
        imageLocation: '2023/gildan2-1.jpg'
    },
    {
        name: 'WWE D-X Shirt',
        price: 150,
        condition: 'used',
        size: 'M',
        dateSold: '2023-04-11',
        imageLocation: '2023/wwe1-1.jpg'
    },
    {
        name: 'Ecko Shirt',
        price: 250,
        condition: 'new',
        size: 'S',
        notes: 'Dropped in Buyer\'s LBC branch in Cedar Peak. Payment picked up on Buyer\'s LBC branch.',
        dateSold: '2023-04-11',
        imageLocation: '2023/ecko12-1.jpg'
    },
    {
        name: 'Samsung Galaxy Express GT-i8730T Phone',
        price: 500,
        condition: 'used',
        size: 'N/A',
        notes: 'Buyer picked up on 4/13. Payment sent through GCash on 4/13. Received payment on 4/13.',
        dateSold: '2023-04-12',
        imageLocation: '2023/samsung4-1.jpg'
    },
    {
        name: 'Levi\'s Jogging Pants',
        price: 200,
        condition: 'new',
        size: '34',
        notes: 'Dropped in Buyer\'s dropping area in Maharlika Center. Payment sent through GCash on 4/19. Received payment on 4/29.',
        dateSold: '2023-04-18',
        imageLocation: '2023/levis1-1.jpg'
    },
    {
        name: 'Stanfield\'s Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 6/6. Payment picked up on 6/10.',
        dateSold: '2023-06-05',
        imageLocation: '2023/stanfields1-1.jpg'
    },
    {
        name: 'Fruit of the Loom Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 6/6. Payment picked up on 6/10.',
        dateSold: '2023-06-05',
        imageLocation: '2023/fruit-of-the-loom1-1.jpg'
    },
    {
        name: 'Fruit of the Loom Shirt',
        price: 150,
        condition: 'new',
        size: 'XL',
        notes: 'Buyer picked up on 6/6. Payment picked up on 6/10.',
        dateSold: '2023-06-05',
        imageLocation: '2023/fruit-of-the-loom2-1.jpg'
    },
    {
        name: 'Jag Shirt',
        price: 150,
        condition: 'used',
        size: 'L',
        notes: 'Shipped via LBC. Payment sent through GCash on 6/7. Received payment on 6/7.',
        dateSold: '2023-06-07',
        imageLocation: '2023/jag5-1.jpg'
    },
    {
        name: 'No Fear Shirt',
        price: 200,
        condition: 'new',
        size: 'XL',
        notes: 'Shipped via LBC. Payment sent through GCash on 6/7. Received payment on 6/7.',
        dateSold: '2023-06-07',
        imageLocation: '2023/no-fear1-1.jpg'
    },
    {
        name: 'Robert Barakett Shirt',
        price: 150,
        condition: 'new',
        size: 'L',
        notes: 'Shipped via LBC. Payment sent through GCash on 6/7. Received payment on 6/7.',
        dateSold: '2023-06-07',
        imageLocation: '2023/robert-barakett1-1.jpg'
    },
    {
        name: 'Superdry Shirt',
        price: 150,
        condition: 'used',
        size: 'XL',
        notes: 'Shipped via LBC. Payment sent through GCash on 6/7. Received payment on 6/7.',
        dateSold: '2023-06-07',
        imageLocation: '2023/superdry1-1.jpg'
    },
    {
        name: 'Under Armour Shirt',
        price: 200,
        condition: 'new',
        size: 'L',
        notes: 'Shipped via LBC. Payment sent through GCash on 6/7. Received payment on 6/7.',
        dateSold: '2023-06-07',
        imageLocation: '2023/under-armour1-1.jpg'
    },
    {
        name: 'Uniqlo Polo',
        price: 200,
        condition: 'new',
        size: 'M',
        dateSold: '2023-06-27',
        imageLocation: '2023/uniqlo3-1.jpg'
    },
    {
        name: 'Champion Shirt',
        price: 100,
        condition: 'used',
        size: 'M',
        dateSold: '2023-07-01',
        imageLocation: '2023/champion1-1.jpg'
    },
    {
        name: 'Culture Shirt',
        price: 150,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 7/18. Payment picked up on 8/9.',
        dateSold: '2023-07-17',
        imageLocation: '2023/culture1-1.jpg'
    },
    {
        name: 'H and M Shirt',
        price: 100,
        condition: 'new',
        size: 'M',
        notes: 'Buyer picked up on 7/18. Payment picked up on 8/9.',
        dateSold: '2023-07-17',
        imageLocation: '2023/h-and-m2-1.jpg'
    },
    {
        name: 'Crooks and Castles Shirt',
        price: 200,
        condition: 'new',
        size: 'L',
        dateSold: '2023-07-21',
        imageLocation: '2023/crooks-and-castles5-1.jpg'
    },
    {
        name: 'Mantaray Shirt',
        price: 100,
        condition: 'used',
        size: 'L',
        dateSold: '2023-07-21',
        imageLocation: '2023/mantaray1-1.jpg'
    },
    {
        name: 'HTC Sensation Z710A Phone',
        price: 500,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-07-24',
        imageLocation: '2023/htc1-1.jpg'
    },
    {
        name: 'Billabong Shorts',
        price: 100,
        condition: 'new',
        size: '33',
        notes: 'Buyer picked up on 8/1. Payment picked up on 8/9.',
        dateSold: '2023-07-31',
        imageLocation: '2023/billabong1-1.jpg'
    },
    {
        name: 'Billabong Shorts',
        price: 100,
        condition: 'new',
        size: '34',
        notes: 'Buyer picked up on 8/1. Payment picked up on 8/9.',
        dateSold: '2023-07-31',
        imageLocation: '2023/billabong2-1.jpg'
    },
    {
        name: 'O\'Neill Shorts',
        price: 50,
        condition: 'new',
        size: '33',
        notes: 'Buyer picked up on 8/1. Payment picked up on 8/9.',
        dateSold: '2023-07-31',
        imageLocation: '2023/o-neill1-1.jpg'
    },
    {
        name: 'Alpha Shirt',
        price: 150,
        condition: 'new',
        size: 'L',
        dateSold: '2023-08-03',
        imageLocation: '2023/alpha1-1.jpg'
    },
    {
        name: 'Ecko Shirt',
        price: 200,
        condition: 'new',
        size: 'XL',
        dateSold: '2023-08-03',
        imageLocation: '2023/ecko13-1.jpg'
    },
    {
        name: 'Merona Shirt',
        price: 150,
        condition: 'used',
        size: 'M',
        notes: 'Buyer picked up on 8/12. Payment picked up on 8/14.',
        dateSold: '2023-08-10',
        imageLocation: '2023/merona1-1.jpg'
    },
    {
        name: 'The North Face Polo',
        price: 150,
        condition: 'new',
        size: 'L',
        notes: 'Buyer picked up on 8/12. Payment picked up on 8/14.',
        dateSold: '2023-08-10',
        imageLocation: '2023/the-north-face3-1.jpg'
    },
    {
        name: 'Sony MDR-NC8 Noise Cancellation Headset',
        price: 250,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-08-13',
        imageLocation: '2023/sony1-1.jpg'
    },
    {
        name: 'Beats by Dre Headset',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-08-13',
        imageLocation: '2023/beats-by-dre1-1.jpg'
    },
    {
        name: 'Resident Evil 2 Remake Pre-order Shirt',
        price: 250,
        condition: 'new',
        size: 'S',
        notes: 'Buyer picked up on 8/14. Payment picked up on 8/20.',
        dateSold: '2023-08-14',
        imageLocation: '2023/resident-evil1-1.jpg'
    },
    {
        name: 'Resident Evil 6 Pre-order Shirt',
        price: 250,
        condition: 'new',
        size: 'M or L',
        notes: 'Buyer picked up on 8/14. Payment picked up on 8/20.',
        dateSold: '2023-08-14',
        imageLocation: '2023/resident-evil2-1.jpg'
    },
    {
        name: 'Adidas Shirt',
        price: 200,
        condition: 'new',
        size: 'L',
        dateSold: '2023-08-23',
        imageLocation: '2023/adidas9-1.jpg'
    },
    {
        name: 'Microsoft Sculpt Ergonomic Keyboard',
        price: 1500,
        condition: 'used',
        size: 'N/A',
        notes: 'Sold to Marie. P500 initially paid through GCash on 9/18 and P1,000 on 9/24. Received payment on 9/28.',
        dateSold: '2023-09-17',
        imageLocation: '2023/microsoft1-1.jpg'
    },
    {
        name: 'SteelSeries Sensei Ten Mouse',
        price: 1500,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-10-03',
        imageLocation: '2023/steelseries1-1.jpg'
    },
    {
        name: 'Porsche Martini Racing Cap',
        price: 250,
        condition: 'used',
        size: 'N/A',
        notes: 'Payment sent through GCash on 10/3. Received payment on 10/23.',
        dateSold: '2023-10-04',
        imageLocation: '2023/porsche1-1.jpg'
    },
    {
        name: 'DVI Cable',
        price: 300,
        condition: 'new',
        size: 'N/A',
        notes: 'P200 initially paid through meetup. Paid P100 through GCash on 10/23. Received payment on 10/24.',
        dateSold: '2023-10-20',
        imageLocation: '2023/cable2-1.jpg'
    },
    {
        name: 'Auscam DPCU Camouflage Hat',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2023-10-23',
        imageLocation: '2023/hat1-1.jpg'
    },
    {
        name: 'Vans Old School Bearcat Shoes',
        price: 500,
        condition: 'used',
        size: '11 US',
        notes: 'Shipped via LBC. Cash-on-pickup. Received payment on 11/20.',
        dateSold: '2023-11-17',
        imageLocation: '2023/vans1-1.jpg'
    },
    {
        name: 'Colorado Craig DGrey Boots',
        price: 500,
        condition: 'new',
        size: '9 US',
        notes: 'Shipped via J&T. Cash-on-delivery. Received payment on 12/10.',
        dateSold: '2023-11-19',
        imageLocation: '2023/colorado1-1.jpg'
    },
    {
        name: 'Puma Ignite Dual Camo Shoes',
        price: 500,
        condition: 'used',
        size: '10.5 US',
        notes: 'Buyer picked up on 1/3. Payment picked up on on 1/8.',
        dateSold: '2023-12-03',
        imageLocation: '2023/puma1-1.jpg'
    },
    {
        name: 'Palit GeForce GT 240 Video Card',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-12-13',
        imageLocation: '2023/video-card2-1.jpg'
    },
    {
        name: 'Razer Deathstalker Keyboard',
        price: 800,
        condition: 'used',
        size: 'N/A',
        dateSold: '2023-12-16',
        imageLocation: '2023/razer1-1.jpg'
    },
    {
        name: 'Nike Cap',
        price: 200,
        condition: 'new',
        size: 'N/A',
        dateSold: '2023-12-30',
        imageLocation: '2023/nike7-1.jpg'
    },
    {
        name: 'Sony Playstation 5 Green Camo Controller',
        price: 2500,
        condition: 'new',
        size: 'N/A',
        dateSold: '2024-01-01',
        imageLocation: '2024/sony2-1.jpg'
    },
    {
        name: 'Nokia 6288 Phone',
        price: 500,
        condition: 'used',
        size: 'N/A',
        notes: 'Shipped via J&T. Payment sent through GCash on 12/31. Received payment on 1/4.',
        dateSold: '2024-01-03',
        imageLocation: '2024/nokia1-1.jpg'
    },
    {
        name: 'Apple iPhone 4 Phone',
        price: 100,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-01-05',
        imageLocation: '2024/apple2-1.jpg'
    },
    {
        name: 'Apple iPhone 4S Phone',
        price: 250,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-01-13',
        imageLocation: '2024/apple3-1.jpg'
    },
    {
        name: 'Apple iPhone 5 Phone',
        price: 100,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-01-14',
        imageLocation: '2024/apple4-1.jpg'
    },
    {
        name: 'Nokia 1650 Phone',
        price: 100,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-01-22',
        imageLocation: '2024/nokia2-1.jpg',
    },
    {
        name: 'Telstra Lite ZTE F327S Phone',
        price: 250,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-01-29',
        imageLocation: '2024/telstra1-1.jpg',
    },
    {
        name: 'Jedel S-506 Speakers',
        price: 250,
        condition: 'new',
        size: 'N/A',
        dateSold: '2024-02-01',
        imageLocation: '2024/jedel1-1.jpg',
    },
    {
        name: 'Casio fx-991MS Scientific Calculator',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-02-04',
        imageLocation: '2024/casio1-1.jpg',
    },
    {
        name: 'Customized Good Vibes Only Signage',
        price: 3800,
        condition: 'new',
        size: '2.5 feet x 2 feet',
        notes: 'Initial P3,500 balance originally paid on June 21, 2023 and final P3,500 balance paid on July 6, 2023. Item received on July 12, 2023.',
        dateSold: '2024-02-18',
        imageLocation: '2024/customized1-1.jpg',
    },
    {
        name: 'Lileng-301 Dancing Water Speakers',
        price: 200,
        condition: 'used',
        size: 'N/A',
        dateSold: '2024-02-19',
        imageLocation: '2024/lileng1-1.jpg',
    },
];

const brands = [
    'A Tale of Two Cities',
    'A Wrinkle in Time',
    'A4Tech',
    'Adidas',
    'Alpha',
    'Alstyle',
    'Altec Lansing',
    'American Apparel',
    'American Eagle Outfitters',
    'Anvil',
    'Apple',
    'ASUS',
    'Auscam',
    'Bauhn',
    'Banana Republic',
    'Beats by Dre',
    'Billabong',
    'BNY Jeans',
    'Bronson',
    'Burberry',
    'Burmese',
    'Call of Duty',
    'Calvin Klein',
    'Cape Juby',
    'Carhartt',
    'Casio',
    'Champion',
    'College Algebra',
    'Colorado',
    'Converse',
    'Corsair',
    'Crooks and Castles',
    'Cukui',
    'Culture',
    'Customized',
    'Delkin',
    'Descente',
    'Dockers',
    'Dolce and Gabanna',
    'Dragonplus',
    'DVI',
    'Ecko',
    'Enyce',
    'Ergophobia',
    'Everlast',
    'FIFA World Cup',
    'Florsheim',
    'Folded and Hung',
    'Fruit of the Loom',
    'FUBU',
    'Fujifilm',
    'G-Star',
    'Gap',
    'Genius',
    'Gildan',
    'Giordano',
    'Greendog',
    'H and M',
    'Habit Outdoors',
    'HDMI',
    'HTC',
    'Human Genes',
    'HyperX',
    'Intex',
    'IZOD',
    'Jag',
    'Jedel',
    'Jerzees',
    'K-Zone',
    'Lacoste',
    'Le Froge',
    'League of Legends',
    'Lee',
    'Levi\'s',
    'LG',
    'Lileng-301',
    'Looney Tunes',
    'LP Support',
    'Lynx',
    'Mantaray',
    'Marks and Spencer',
    'Merona',
    'Microsoft',
    'Miniso',
    'Mishka NYC',
    'Motor',
    'Mossimo',
    'Nautica Jeans',
    'Nike',
    'Nintendo',
    'No Fear',
    'Nokia',
    'NYC',
    'O\'Neill',
    'Old Navy',
    'Omega Houseware',
    'Oreo',
    'Palit',
    'Panasonic',
    'Pelle Pelle',
    'Penshoppe',
    'PGA Tours',
    'Phat Farm',
    'Philips',
    'Philippine',
    'Plane and Spherical Trigonometry',
    'Pokemon',
    'Porsche',
    'Pour Homme',
    'PUBG',
    'Pujiqing',
    'Puma',
    'Quiksilver',
    'Ralph Lauren',
    'Razer',
    'Reebok',
    'Resident Evil',
    'RMC',
    'Robert Barakett',
    'ROMOSS',
    'Rotring',
    'RRJ',
    'Samsung',
    'Semir',
    'SKMEI',
    'Soft Blue',
    'Softex',
    'Sony',
    'South Pole',
    'Special Force',
    'Stanfield\'s',
    'SteelSeries',
    'Superdry',
    'T Bar',
    'Tapout',
    'TEAMGROUP',
    'Telstra',
    'Tender Juicy',
    'The North Face',
    'Tribal',
    'U2',
    'Umbro',
    'Under Armour',
    'Uniqlo',
    'Universal Studios',
    'Vans',
    'Weatherproof',
    'Wrangler',
    'WWE',
    'ZOTAC'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export { items, brands, months };
