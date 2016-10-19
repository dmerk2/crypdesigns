// This file automates the process of creating a ton of subcategory instances

subs_and_cats = {
  web_app: [["Web page design", "web_design"],["WordPress theme design", "wordpress_theme"], ["Landing page design", "landing_page"], ["Icon or button", "icon_button"], ["App design", "app_design"], ["Facebook cover", "facebook_cover"], ["Social media page", "social_media"], ["Banner ad", "banner_ad"], ["Flash banner", "flash_banner"], ["Other web or app design", "other_web_app"]],

  clothing_merch: [["T-shirt", "tshirt"], ["Clothing or apparel", "clothing_apparel"], ["Merchandise", "merchandise"], ["Cup or mug", "cup_mug"], ["Sticker", "sticker"], ["Other clothing or merchandise", "other_clothing_merch"]],

  art_illustration: [["Illustration or graphics", "illustration_graphics"], ["Card invitation", "card_invitation"], ["Character or mascot", "character_mascot"], ["Tattoo", "tattoo"], ["Three Dimensional", "three_dimensional"], ["Other art or illustration", "other_art_illustration"]],

  logos_identity: [["Logo design", "logo_design"], ["Logo and brand identity pack", "brand_identity_pack"], ["Logo and social media pack", "social_media_pack"], ["Logo and hosted website pack", "logo_website"], ["Logo and business card", "logo_business_card"], ["Business card", "business_card"], ["Stationery", "stationery"]],

  business_advertising: [["Postcard, flyer or print", "postcard_flyer"], ["Poster", "poster"], ["Infographic", "infographic"], ["Brochure", "brochure"], ["Car, truck or van wrap", "vehicle_wrap"], ["Signage", "signage"], ["Email", "email"], ["PowerPoint Template", "powerpoint_template"], ["Menu", "menu"], ["Other business or advertising", "other_business_advertising"]],

  book_magazine: [["Book cover", "book_cover"], ["Magazine cover", "magazine_cover"], ["Other book or magazine", "other_book_magazine"]],

  packaging_label: [["Product packaging", "product_packaging"], ["Product label", "product_label"], ["Other packaging or label", "other_packaging_label"]]
};


var Subcategories = [];


// for (var i = 0; i < 7; i++) {
//   var cats = ["web_app", "clothing_merch", "art_illustration", "logos_identity", "business_advertising", "book_magazine", "packaging_label"];

//   var current = cats[i];

//   for (var j = 0; j < subs_and_cats[current].length; j++) {
//     var toPush = 'var ' + subs_and_cats[current][j][1] + '= new Subcategory({name: "' + subs_and_cats[current][j][0] + '", category: ' + current + '})';

//     Subcategories.push(toPush);
//   }
// };


// for (var i =0; i < Subcategories.length; i++) {
//   console.log(Subcategories[i]);
// }

for (var i = 0; i < 7; i++) {
  var cats = ["web_app", "clothing_merch", "art_illustration", "logos_identity", "business_advertising", "book_magazine", "packaging_label"];

  var current = cats[i];

  for (var j = 0; j < subs_and_cats[current].length; j++) {
    var toPush = subs_and_cats[current][j][1];

    Subcategories.push(toPush);
  }
};

console.log(Subcategories);
