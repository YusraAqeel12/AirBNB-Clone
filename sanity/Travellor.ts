export default {
    name: 'traveller',
    title: 'Traveller',
    type: 'reference',
    to: [{ type: 'person' }],
    preview: {
      select: {
        name: 'person.name',
        media: 'person.image',
      },
    },
  }

  //reference sai relatinh banta hai us document sai 
  //you can previe what you want to see in sanity 
  //jo cheez agar sanity mai  dikhaani hai usko lagado in preview