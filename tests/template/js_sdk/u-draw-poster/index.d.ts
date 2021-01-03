import { DrawPosterBuildOpts } from "./utils/interface";
import DrawPoster from "./draw-poster";
import drawQrCode from "./extends/draw-qr-code/index";
import createFromList from './extends/create-from-list/index';
declare const useDrawPoster: (options: string | DrawPosterBuildOpts) => Promise<DrawPoster>;
declare const useDrawPosters: (optionsAll: (string | DrawPosterBuildOpts)[]) => Promise<{
    [key: string]: DrawPoster;
}>;
export { DrawPoster, useDrawPoster, useDrawPosters, drawQrCode, createFromList };
export default DrawPoster;
