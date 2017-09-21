import {MarvelComic} from '../marvel-comic/marvel-comic';

export class MarvelCharacter {
  public comics: MarvelComic[];
  public img: {small: string, medium: string, xlarge: string};
  constructor(
    public id: string,
    public name: string,
    public description: string,
    private imgItem: {path: string, extension: string},
    private comicItems: any,
    public favorite = false
) {
    this.img = {
      small: imgItem.path + '/portrait_small.' + imgItem.extension,
      medium: imgItem.path + '/portrait_medium.' + imgItem.extension,
      xlarge: imgItem.path + '/portrait_xlarge.' + imgItem.extension
    };
    this.comics = comicItems.map((item) => new MarvelComic(item.name));
  }

}
