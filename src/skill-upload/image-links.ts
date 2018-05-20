import {uploadFile} from 'imgur';
import { dirname } from "path";

export class ImageLinks {
    public small: string;
    public big: string;
    public appDir: string;

    constructor() {
        this.appDir = dirname(require.main.filename) + '/../../img/';
    }

    public async upload() {
        this.big = (await uploadFile(this.appDir + 'big-image.png')).data.link;
        this.small = (await uploadFile(this.appDir + 'small-image.png')).data.link;
    }
}
