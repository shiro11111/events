import { AppEvent } from '../../events-interface';

export class EventUtil {

  static getEventsList(): AppEvent[] {
    return [
      {
        id: 1,
        title: 'ANIME',
        dueOn: new Date(),
        shortDescription: 'dgbdfghfdgdfg',
        content: 'dfgdfgdfgdf',
        thumbnail: 'dfgdfdfg',
      },
      {
        id: 2,
        title: 'Anime Night',
        dueOn: new Date(),
        shortDescription: 'dgbdfghfdsfdfdsfdgdfg',
        content: 'dfgdfdsfdsfdsgdfgdf',
        thumbnail: 'dfgddsdsfdsfdfg',
      },
      {
        id: 3,
        title: 'Manga Night',
        dueOn: new Date(),
        shortDescription: 'dgbdfghdafgdfagdghgfjtykjfdgdfg',
        content: 'dfgdhgfsjtyjtehgbrthrtfgdfgdf',
        thumbnail: 'dfghrsgrtsgrtgrtsgrtwgwgdfdfg',
      },
      {
        id: 4,
        title: 'titdfgdfsgfdfsle',
        dueOn: new Date(),
        shortDescription: 'dgbdfghfhfjghjhjdthtydgdfg',
        content: 'dfgdfhhhbtrhtegdfgdf',
        thumbnail: 'dfghhrthethdfdfg',
      },
      {
        id: 5,
        title: 'tifdgdfasgfdasgdfhgfshtle',
        dueOn: new Date(),
        shortDescription: 'dgbdfghgfjghjghjkdgjgfdsfdgdfg',
        content: 'dfgdfgfshgfshgfhgfhgfshdfgdf',
        thumbnail: 'dfgdsfhgfshgfjtyjdtedfdfg',
      }
    ];
  }

  static getEventDetails(id: number): AppEvent {
    switch (id) {
      case 1:
        return {
          id: 1,
          title: 'ANIME',
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
