import faker from 'faker'
import {times, random, shuffle} from 'lodash'

export default {
  interactions: times(random(10, 20)).map(item => ({
    company: shuffle(['Nike', ' Microsoft', 'Apple', 'BT', 'BBC', 'Guardian']).pop(),
    subject: faker.lorem.sentence(),

  })),
  contacts: times(random(10, 20)).map(item => ({
    company: shuffle([' Microsoft', 'Apple', 'BT', 'BBC', 'Guardian', ' Samsung', 'Sony']).pop(),
    subject: faker.lorem.sentence(),
  })),
}
