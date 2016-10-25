var Category = require('../models/category.js');
var Subcategory = require('../models/subcategory.js');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypdesigns');


var web_design= new Subcategory({name: "Web page design", category: web_app})
var wordpress_theme= new Subcategory({name: "WordPress theme design", category: web_app})
var landing_page= new Subcategory({name: "Landing page design", category: web_app})
var icon_button= new Subcategory({name: "Icon or button", category: web_app})
var app_design= new Subcategory({name: "App design", category: web_app})
var facebook_cover= new Subcategory({name: "Facebook cover", category: web_app})
var social_media= new Subcategory({name: "Social media page", category: web_app})
var banner_ad= new Subcategory({name: "Banner ad", category: web_app})
var flash_banner= new Subcategory({name: "Flash banner", category: web_app})
var other_web_app= new Subcategory({name: "Other web or app design", category: web_app})
var tshirt= new Subcategory({name: "T-shirt", category: clothing_merch})
var clothing_apparel= new Subcategory({name: "Clothing or apparel", category: clothing_merch})
var merchandise= new Subcategory({name: "Merchandise", category: clothing_merch})
var cup_mug= new Subcategory({name: "Cup or mug", category: clothing_merch})
var sticker= new Subcategory({name: "Sticker", category: clothing_merch})
var other_clothing_merch= new Subcategory({name: "Other clothing or merchandise", category: clothing_merch})
var illustration_graphics= new Subcategory({name: "Illustration or graphics", category: art_illustration})
var card_invitation= new Subcategory({name: "Card invitation", category: art_illustration})
var character_mascot= new Subcategory({name: "Character or mascot", category: art_illustration})
var tattoo= new Subcategory({name: "Tattoo", category: art_illustration})
var three_dimensional= new Subcategory({name: "Three Dimensional", category: art_illustration})
var other_art_illustration= new Subcategory({name: "Other art or illustration", category: art_illustration})
var logo_design= new Subcategory({name: "Logo design", category: logos_identity})
var brand_identity_pack= new Subcategory({name: "Logo and brand identity pack", category: logos_identity})
var social_media_pack= new Subcategory({name: "Logo and social media pack", category: logos_identity})
var logo_website= new Subcategory({name: "Logo and hosted website pack", category: logos_identity})
var logo_business_card= new Subcategory({name: "Logo and business card", category: logos_identity})
var business_card= new Subcategory({name: "Business card", category: logos_identity})
var stationery= new Subcategory({name: "Stationery", category: logos_identity})
var postcard_flyer= new Subcategory({name: "Postcard, flyer or print", category: business_advertising})
var poster= new Subcategory({name: "Poster", category: business_advertising})
var infographic= new Subcategory({name: "Infographic", category: business_advertising})
var brochure= new Subcategory({name: "Brochure", category: business_advertising})
var vehicle_wrap= new Subcategory({name: "Car, truck or van wrap", category: business_advertising})
var signage= new Subcategory({name: "Signage", category: business_advertising})
var email= new Subcategory({name: "Email", category: business_advertising})
var powerpoint_template= new Subcategory({name: "PowerPoint Template", category: business_advertising})
var menu= new Subcategory({name: "Menu", category: business_advertising})
var other_business_advertising= new Subcategory({name: "Other business or advertising", category: business_advertising})
var book_cover= new Subcategory({name: "Book cover", category: book_magazine})
var magazine_cover= new Subcategory({name: "Magazine cover", category: book_magazine})
var other_book_magazine= new Subcategory({name: "Other book or magazine", category: book_magazine})
var product_packaging= new Subcategory({name: "Product packaging", category: packaging_label})
var product_label= new Subcategory({name: "Product label", category: packaging_label})
var other_packaging_label= new Subcategory({name: "Other packaging or label", category: packaging_label})

var Subcategories = [ web_design,
  wordpress_theme,
  landing_page,
  icon_button,
  app_design,
  facebook_cover,
  social_media,
  banner_ad,
  flash_banner,
  other_web_app,
  tshirt,
  clothing_apparel,
  merchandise,
  cup_mug,
  sticker,
  other_clothing_merch,
  illustration_graphics,
  card_invitation,
  character_mascot,
  tattoo,
  three_dimensional,
  other_art_illustration,
  logo_design,
  brand_identity_pack,
  social_media_pack,
  logo_website,
  logo_business_card,
  business_card,
  stationery,
  postcard_flyer,
  poster,
  infographic,
  brochure,
  vehicle_wrap,
  signage,
  email,
  powerpoint_template,
  menu,
  other_business_advertising,
  book_cover,
  magazine_cover,
  other_book_magazine,
  product_packaging,
  product_label,
  other_packaging_label]


var web_app = new Category({
  name: "Web and App Design",
  subcategories: [web_design._id, wordpress_theme._id, landing_page._id, icon_button._id, app_design._id, facebook_cover._id, social_media._id, banner_ad._id, flash_banner._id, other_web_app._id]
});
var clothing_merch = new Category({
  name: "Clothing and Merchandise",
  subcategories: [tshirt._id, clothing_apparel._id, merchandise._id, cup_mug._id, sticker._id, other_clothing_merch._id]
});
var art_illustration = new Category({
  name: "Art and Illustration",
  subcategories: [illustration_graphics._id, card_invitation._id, character_mascot._id, tattoo._id, three_dimensional._id, other_art_illustration._id ]
});
var logos_identity = new Category({
  name: "Logos and Identity",
  subcategories: [logo_design._id, brand_identity_pack._id, social_media_pack._id, logo_website._id, logo_business_card._id, business_card._id, stationery._id]
});
var business_advertising = new Category({
  name: "Business and Advertising",
  subcategories: [postcard_flyer._id, poster._id, infographic._id, brochure._id, vehicle_wrap._id, signage._id, email._id, powerpoint_template._id, menu._id, other_business_advertising._id]
});
var book_magazine = new Category({
  name: "Book and Magazine",
  subcategories: [book_cover._id, magazine_cover._id, other_book_magazine._id]
});
var packaging_label = new Category({
  name: "Packaging and Label",
  subcategories: [product_packaging._id, product_label._id, other_packaging_label._id]
});

var Categories = [web_app, clothing_merch, art_illustration, logos_identity, business_advertising, book_magazine, packaging_label];





// Seed the DB
function exit() {
  mongoose.disconnect();
};

var done = 0;
for (var i=0; i < Categories.length; i++) {
  Categories[i].save(function(err, result) {
    console.log('err', err);
    console.log('result', result);
    done++;
    if (done === Categories.length) {
      exit();
    }
  });
}

web_design.category = web_app._id
wordpress_theme.category = web_app._id
landing_page.category = web_app._id
icon_button.category = web_app._id
app_design.category = web_app._id
facebook_cover.category = web_app._id
social_media.category = web_app._id
banner_ad.category = web_app._id
flash_banner.category = web_app._id
other_web_app.category = web_app._id
tshirt.category = clothing_merch._id
clothing_apparel.category = clothing_merch._id
merchandise.category = clothing_merch._id
cup_mug.category = clothing_merch._id
sticker.category = clothing_merch._id
other_clothing_merch.category = clothing_merch._id
illustration_graphics.category = art_illustration._id
card_invitation.category = art_illustration._id
character_mascot.category = art_illustration._id
tattoo.category = art_illustration._id
three_dimensional.category = art_illustration._id
other_art_illustration.category = art_illustration._id
logo_design.category = logos_identity._id
brand_identity_pack.category = logos_identity._id
social_media_pack.category = logos_identity._id
logo_website.category = logos_identity._id
logo_business_card.category = logos_identity._id
business_card.category = logos_identity._id
stationery.Stationerycategory = logos_identity._id
postcard_flyer.category = business_advertising._id
poster.category = business_advertising._id
infographic.category = business_advertising._id
brochure.category = business_advertising._id
vehicle_wrap.category = business_advertising._id
signage.category = business_advertising._id
email.category = business_advertising._id
powerpoint_template.category = business_advertising._id
menu.category = business_advertising._id
other_business_advertising.category = business_advertising._id
book_cover.category = book_magazine._id
magazine_cover.category = book_magazine._id
other_book_magazine.category = book_magazine._id
product_packaging.category = packaging_label._id
product_label.category = packaging_label._id
other_packaging_label.category = packaging_label._id

var done2 = 0;
for (var i=0; i < Subcategories.length; i++) {
  Subcategories[i].save(function(err, result) {
    console.log('err', err);
    console.log('result', result);
    done++;
    if (done === Subcategories.length) {
      exit();
    }
  });
}


Category.find({}).populate('subcategories').exec(function (err, subcategories) {
  if (err) return (err);
});

Subcategory.find({}).populate('category').exec(function (err, category) {
  if (err) return (err);
});