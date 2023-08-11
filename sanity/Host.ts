import { defineField , defineType } from "sanity"

export default {
    name: 'host',
    title: 'Host',
    type: 'reference',
    to: [{ type: 'person' }],
  }