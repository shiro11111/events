import { AppEvent } from '../../events-interface';

export class EventUtil {

  static getEventsList(): AppEvent[] {
    return [
      {
        id: 1,
        title: 'Mountains are awesome',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis, massa ligula egestas massa, at rhoncus velit mauris pharetra mi. Nam varius imperdiet ' +
          'dolor, feugiat lobortis quam fringilla et. Integer viverra in nisi at condimentum. Cras efficitur, nulla in laoreet consequat, ' +
          'nisl augue consectetur est, ultrices semper tortor ipsum id augue. Mauris at libero mattis, aliquam ligula sed, tempus dolor. ' +
          'Aenean euismod ut lacus nec dapibus. Etiam varius leo non rutrum dictum. Sed quis dapibus risus.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum.',
        thumbnail: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg'
      },
      {
        id: 2,
        title: 'Some mountains',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis,' +
          ' placerat non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc. Donec vulputate mauris quis fringilla ' +
          'tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus scelerisque cursus ' +
          'faucibus. Etiam at ante nec tellus interdum congue. Proin porta tortor in ante maximus tempus.',
        content: 'dfgdfdsfdsfdsgdfgdf',
        thumbnail: 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170407220907-01-iconic-mountains-k2-restricted.jpg',
      },
      {
        id: 3,
        title: 'More mountains',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, ' +
          'placerat non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc. Donec vulputate mauris quis fringilla t' +
          'empor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus scelerisque cursus ' +
          'faucibus. Etiam at ante nec tellus interdum congue. Proin porta tortor in ante maximus tempus.',
        content: 'dfgdhgfsjtyjtehgbrthrtfgdfgdf',
        thumbnail: 'https://www.infoplease.com/sites/infoplease.com/files/inline-images/mount_everest_650.jpg'
      },
      {
        id: 4,
        title: 'This is fine',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, ' +
          'placerat non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc. Donec vulputate mauris quis fringilla ' +
          'tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus scelerisque cursus ' +
          'faucibus. Etiam at ante nec tellus interdum congue. Proin porta tortor in ante maximus tempus.',
        content: 'dfgdfhhhbtrhtegdfgdf',
        thumbnail: 'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5da3abb226e19a58e7391bc6bde89d81&w=1000&q=80',
      },
      {
        id: 5,
        title: 'Mountains rock!',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, placerat' +
          ' non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc. Donec vulputate mauris quis fringilla tempor. Orci ' +
          'varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus scelerisque cursus faucibus. Etiam ' +
          'at ante nec tellus interdum congue. Proin porta tortor in ante maximus tempus.',
        content: 'dfgdfgfshgfshgfhgfhgfshdfgdf',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb62cRREX7MDiv3sjosmYMKlAmMAMRxMmupasMwfjb0AFcP4H',
      }
    ];
  }

  static getEventDetails(id: number): AppEvent {
    switch (id) {
      case 1:
        return {
          id: 1,
          title: 'Title Title',
          dueOn: new Date(),
          shortDescription: 'dgbdfghfdgdfg',
          content: 'dfgdfgdfgdf',
          thumbnail: 'dfgdfdfg',
        };
        break;
      case 2:
        return {
          id: 2,
          title: 'Anime Night',
          dueOn: new Date(),
          shortDescription: 'dgbdfghfdsfdfdsfdgdfg',
          content: 'dfgdfdsfdsfdsgdfgdf',
          thumbnail: 'dfgddsdsfdsfdfg',
        };
        break;
      case 3:
        return {
          id: 3,
          title: 'Manga Night',
          dueOn: new Date(),
          shortDescription: 'dgbdfghdafgdfagdghgfjtykjfdgdfg',
          content: 'dfgdhgfsjtyjtehgbrthrtfgdfgdf',
          thumbnail: 'dfghrsgrtsgrtgrtsgrtwgwgdfdfg',
        };
        break;
      case 4:
        return {
          id: 4,
          title: 'titdfgdfsgfdfsle',
          dueOn: new Date(),
          shortDescription: 'dgbdfghfhfjghjhjdthtydgdfg',
          content: 'dfgdfhhhbtrhtegdfgdf',
          thumbnail: 'dfghhrthethdfdfg',
        };
        break;
      case 5:
        return {
          id: 5,
          title: 'tifdgdfasgfdasgdfhgfshtle',
          dueOn: new Date(),
          shortDescription: 'dgbdfghgfjghjghjkdgjgfdsfdgdfg',
          content: 'dfgdfgfshgfshgfhgfhgfshdfgdf',
          thumbnail: 'dfgdsfhgfshgfjtyjdtedfdfg',
        };
        break;
      default:
        return null;
        break;
    }
  }
}
