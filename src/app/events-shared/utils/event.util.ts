import { AppEvent } from '../../events-interface';

export class EventUtil {

  static getEventsList(): AppEvent[] {
    return [
      {
        id: 1,
        title: 'Koncert Arki Noego',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a libero ac dolor blandit dictum. ' +
          'In scelerisque, nunc sed ornare mollis.',
        content: 'Lorem ipsum dolor sit amet, consectetur.',
        thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg'
      },
      {
        id: 2,
        title: 'Koncert Arki Noego',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis,' +
          ' placerat non metus. Integer felis mi, aliquam nec magna.',
        content: 'dfgdfdsfdsfdsgdfgdf',
        thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
      },
      {
        id: 3,
        title: 'Koło różańcowe',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, ' +
          'placerat non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc. ',
        content: 'dfgdhgfsjtyjtehgbrthrtfgdfgdf',
        thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg'
      },
      {
        id: 4,
        title: 'This is fine',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, ' +
          'placerat non metus. Integer felis mi, aliquam nec magna ut, egestas molestie nunc.',
        content: 'dfgdfhhhbtrhtegdfgdf',
        thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
      },
      {
        id: 5,
        title: 'Nabożeństwo majowe',
        dueOn: new Date(2018, 11, 3),
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa nunc, fermentum in porta quis, ' +
          'placerat non metus.',
        content: 'dfgdfgfshgfshgfhgfhgfshdfgdf',
        thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
      }
    ];
  }

  static getEventDetails(id: number): AppEvent {
    switch (id) {
      case 1:
        return {
          id: 1,
          title: 'Koncert Arki Noego',
          dueOn: new Date(2018, 12, 3),
          shortDescription: 'xxx',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquam leo, vel condimentum leo. ' +
            'Suspendisse enim odio, volutpat et venenatis vitae, volutpat sed dolor. Pellentesque tempus condimentum nunc, eu ' +
            'maximus tellus feugiat facilisis. Praesent enim nulla, pulvinar a velit id, pretium aliquet sapien. Nulla et orci sagittis, ' +
            'mattis lorem id, ultricies eros. Phasellus in porttitor urna. Curabitur dapibus libero gravida malesuada sollicitudin. Duis' +
            ' elit nisi, molestie at auctor vitae, venenatis quis sapien. Suspendisse eget pellentesque est, nec accumsan massa. ' +
            'Pellentesque aliquam nunc ipsum, sed condimentum purus viverra sit amet. Vestibulum lorem enim, fringilla vitae odio sit ' +
            'amet, feugiat tincidunt risus. Aliquam sagittis magna ac diam sagittis aliquet.',
          thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
        };
        break;
      case 2:
        return {
          id: 2,
          title: 'Koncert Arki Noego',
          dueOn: new Date(2018, 12, 3),
          shortDescription: 'dgbdfghfdsfdfdsfdgdfg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in aliquam leo, vel condimentum leo. Suspendisse ' +
            'enim odio, volutpat et venenatis vitae, volutpat sed dolor. Pellentesque tempus condimentum nunc, eu maximus tellus feugiat ' +
            'facilisis. Praesent enim nulla, pulvinar a velit id, pretium aliquet sapien. Nulla et orci sagittis, mattis lorem id, ' +
            'ultricies eros. Phasellus in porttitor urna. Curabitur dapibus libero gravida malesuada sollicitudin. Duis elit nisi,' +
            ' molestie at auctor vitae, venenatis quis sapien. Suspendisse eget pellentesque est, nec accumsan massa. Pellentesque ' +
            'aliquam nunc ipsum, sed condimentum purus viverra sit amet. Vestibulum lorem enim, fringilla vitae odio sit amet, ' +
            'feugiat tincidunt risus. Aliquam sagittis magna ac diam sagittis aliquet.',
          thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
        };
        break;
      case 3:
        return {
          id: 3,
          title: 'Koło Różańcowe',
          dueOn: new Date(2018, 12, 3),
          shortDescription: 'dgbdfghdafgdfagdghgfjtykjfdgdfg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit massa, non tincidunt massa. Phasellus ac ' +
            'turpis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer magna ex, ' +
            'molestie vel sagittis id, euismod quis augue. Nam sodales augue sit amet diam porta, sit amet ullamcorper quam facilisis. S' +
            'uspendisse aliquet diam vel nulla finibus mattis varius eget quam. Suspendisse iaculis metus mauris, id varius turpis finibus ' +
            'ac. Donec facilisis urna lorem, a auctor magna accumsan vitae. Pellentesque quis porttitor augue. Sed scelerisque ex sit amet ' +
            'nisi porta, non dignissim sem consequat. Nunc augue ante, dapibus quis ligula sit amet, lacinia ullamcorper orci.',
          thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
        };
        break;
      case 4:
        return {
          id: 4,
          title: 'This is fine',
          dueOn: new Date(2018, 12, 3),
          shortDescription: 'dgbdfghfhfjghjhjdthtydgdfg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit massa, non tincidunt massa. Phasellus ac' +
            ' turpis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer magna ex, ' +
            'molestie vel sagittis id, euismod quis augue. Nam sodales augue sit amet diam porta, sit amet ullamcorper quam facilisis. ' +
            'Suspendisse aliquet diam vel nulla finibus mattis varius eget quam. Suspendisse iaculis metus mauris, id varius turpis' +
            ' finibus ac. Donec facilisis urna lorem, a auctor magna accumsan vitae. Pellentesque quis porttitor augue. Sed scelerisque ' +
            'ex sit amet nisi porta, non dignissim sem consequat. Nunc augue ante, dapibus quis ligula sit amet, lacinia ullamcorper orci.',
          thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
        };
        break;
      case 5:
        return {
          id: 5,
          title: 'Nabożeństwo majowe',
          dueOn: new Date(2018, 12, 3),
          shortDescription: 'dgbdfghgfjghjghjkdgjgfdsfdgdfg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget suscipit massa, non tincidunt massa. ' +
            'Phasellus ac turpis velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ' +
            'Integer magna ex, molestie vel sagittis id, euismod quis augue. Nam sodales augue sit amet diam porta, sit amet ullamcorper ' +
            'quam facilisis. Suspendisse aliquet diam vel nulla finibus mattis varius eget quam. Suspendisse iaculis metus mauris, id ' +
            'varius turpis finibus ac. Donec facilisis urna lorem, a auctor magna accumsan vitae. Pellentesque quis porttitor augue. ' +
            'Sed scelerisque ex sit amet nisi porta, non dignissim sem consequat. Nunc augue ante, dapibus quis ligula sit amet, ' +
            'lacinia ullamcorper orci.',
          thumbnail: 'https://static.billygraham.org/sites/billygrahamlibrary.org/uploads/pro/2016/03/Cross-Easter.jpg',
        };
        break;
      default:
        return null;
        break;
    }
  }
}
