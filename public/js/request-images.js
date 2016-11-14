//cloudinary.cloudinary_js_config()
$.cloudinary.config({ cloud_name: 'josiepizzo', api_key: '989437654536147'});

$('.cloudinary-fileupload').unsigned_cloudinary_upload('n2opekbe',
  { cloud_name: 'dmgjawsym' }
).bind('cloudinarydone', function(e, data) {
  console.log('THIS IS CLOUDINARY DATA ', data);
  $("#coaturl").val(data.result.url);
  console.log('THIS IS #coaturl ', data.result.url);
  console.log(coaturl);
  $('.coatimage').append($.cloudinary.image(data.result.public_id, 
  { format: 'jpg', width: 150, 
    crop: 'thumb', } ))}    
);