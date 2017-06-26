import faker from 'faker'
import {times, random} from 'lodash'

const companies = times(random(6, 20)).map(item => ({
  name: faker.company.companyName(),
  uk_region: {
    name: 'England',
  },
  trading_address_town: faker.address.city(),
}))

export default companies
