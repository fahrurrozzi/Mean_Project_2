//Get 'home' page
module.exports.homelist=function(req,res){
	res.render('locations-list', {
		title : 'Good Place Finder  - find a place to work with wifi',
		pageHeader:{
			title: "Good Place Finder",
			strapline:'Find places to work with wifi near you!'
		},
		sidebar: "Looking for wifi and a seat? Good Place Finder helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
 			name: 'Kopi Tentrem',
 			address: 'Jalan Cisitu Lama no. 50',
 			rating: 3,
 			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 			distance: '100m'
 		}, {
 			name: 'Cikopi',
 			address: 'Jalan Cisitu Baru no. 99',
 			rating: 4,
 			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 			distance: '200m'
 		}, {
 			name: 'Upnormal',
 			address: '125 High Street, Reading, RG6 1PS',
 			rating: 5,
 			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
 			distance: '900m'
 		}]

    });
};

//Get 'Location info' page
// module.exports.locationInfo=function(req,res){
// 	res.render('location-info', {title : 'Location info'});
// };

module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Kopi Tentrem',
        pageHeader: {
            title: 'Kopi Tentrem'
        },
        sidebar: {
            context: 'is on Good Place Finder because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Kopi Tentrem',
            address: 'Jalan Cisitu Lama no. 29',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 May 2017',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2017',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

//Get 'Add review' page
module.exports.addReview=function(req,res){
	res.render('location-review-form', {
		title : 'Review Kopi Tentrem on Good Place Finder',
		pageHeader: {title: 'Review Kopi Tentrem'}
	});
};