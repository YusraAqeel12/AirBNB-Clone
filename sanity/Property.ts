export default {
    name: 'property',
    type: 'document',
    title: 'Property',
    fields: [
      {
        name: 'title',
        type: "string",
        title: 'Title'
      } , 
      {
        name: 'location',
        type: 'geopoint',
        title: 'Location'
      } ,  
      {
        title: 'Property Type',
        name: 'propertytype',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'flat', value: 'Flat'},
            {title: 'boutique', value: 'Boutique'},
            {title: 'house', value: 'House'},
            {title: 'breakFast And Lunch', value: 'Breakfast and Lunch'}
          ] ,
          layout :"radio"
        }
      } ,
      {
        name: 'mainimage',
        type: "image",
        title: 'Main Image' , 
        options : {
            hotspot : true
        }
      } , 
      {
        name: 'image',
        type: "array",
        title: 'Image' , 
        of:[{type:"propertyimage"}]
      } ,
      {
        name: 'price',
        type: "number",
        title: 'Price Per Night' , 
        
      } ,  
        
      {
        name: 'bedroom',
        type: "number",
        title: 'Bed Room ' , 
        
      } , 
      {
        name: 'slug',
        type: 'slug',
        title: 'Slugs ' ,
        Option:{
            source : 'title' ,
            maxLength : 90
        }    
      }  , 
      {
        name: 'id',
        type: 'number',
        title: 'Id ' , 
        
      } , 
      {
        name: 'description',
        type: 'string',
        title: 'Description' , 
        
      } , 
      {
        name: 'host',
        type: 'host',
        title: 'host' , 
        
      } ,
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{type:'review'}],
      }

    ]
  }

  //hotspot is for image responsiveness image ko crop karsaktay ho in sanity itself
  //source ka matlab feild jis sai slug derive hokar aayi ga 