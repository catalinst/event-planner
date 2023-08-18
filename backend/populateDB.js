const categoryModel = require('./Categories/Model')
const eventModel = require('./Events/Model')

// populate with categories and events

const populateDB = () => {
  eventModel.count()
    .then(data => {
      if (data === 0) {
        eventModel.insertMany([
          {
            name: 'Catan contest',
            description: 'Description for the card',
            startDate: 'Oct 10 2024 10:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Marketing' }, { name: 'Social' }],
            isSubscribed: true
          }, {
            name: 'Team-building',
            description: 'Description for the card',
            startDate: 'Oct 20 2024 02:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Marketing' }, { name: 'Coding' }],
            isSubscribed: false
          }, {
            name: 'Office party',
            description: 'Description for the card',
            startDate: 'May 25 2024 00:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Coding' }],
            isSubscribed: true
          }, {
            name: 'Some long name',
            description: 'Description for the card',
            startDate: 'May 20 2024 07:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Marketing' }, { name: 'Social' }],
            isSubscribed: true
          }, {
            name: 'Redux contest',
            description: 'Description for the card',
            startDate: 'May 30 2024 07:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Coding' }, { name: 'Social' }],
            isSubscribed: false
          }, {
            name: 'Coffee meeting',
            description: 'Description for the card',
            startDate: 'Oct 30 2024 09:00:00',
            endDate: '',
            imagePath: '',
            categories: [{ name: 'Marketing' }, { name: 'Social' }],
            isSubscribed: true
          },
        ]).then(() => console.log('Events populated!'))
      }
    })
    .catch(err => console.log(err))

  categoryModel.count()
    .then(data => {
      if (data === 0) {
        categoryModel.insertMany([
          { name: 'Coding' },
          { name: 'Social' },
          { name: 'Marketing' },
        ]).then(() => console.log('Categories populated!'))
      }
    })
    .catch(err => console.log(err))
}

module.exports = populateDB