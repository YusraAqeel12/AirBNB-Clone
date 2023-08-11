import {  type SchemaTypeDefinition } from 'sanity'
import Property from './Property'
import PropertyImage from './PropertyImage'
import Review from './Review'
import Travellor from './Travellor'
import Person from './Person'
import Host from './Host'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Property , PropertyImage, Review , Travellor , Person, Host],
}
