import { Canvas, DrawPosterCanvasCtx, FillWarpTextOpts } from './utils';
/** 等待绘制图片原型方法 */
export declare const drawImage: (canvas: Canvas | undefined, ctx: DrawPosterCanvasCtx, url: string, x: number, y: number, w: number, h: number) => Promise<boolean>;
/** 绘制换行字体原型方法 */
export declare const fillWarpText: (ctx: DrawPosterCanvasCtx, config: FillWarpTextOpts) => {
    text: string;
    y: number;
    x: number;
}[];
/** 绘制圆角矩形原型方法 */
export declare const roundRect: (ctx: DrawPosterCanvasCtx, x: number, y: number, w: number, h: number, r?: number, fill?: boolean, stroke?: boolean) => void;
/** 绘制填充圆角矩形方法 */
export declare const fillRoundRect: (ctx: DrawPosterCanvasCtx, x: number, y: number, w: number, h: number, r: number) => void;
/** 绘制填充圆角矩形方法 */
export declare const strokeRoundRect: (ctx: DrawPosterCanvasCtx, x: number, y: number, w: number, h: number, r: number) => void;
/** 绘制圆角图片原型方法 */
export declare const drawRoundImage: (ctx: DrawPosterCanvasCtx, url: string, x: number, y: number, w: number, h: number, r?: number) => Promise<boolean>;
/** 绘制画笔初始化挂载 */
export declare const drawCtxMount: (canvas: Canvas | undefined, ctx: DrawPosterCanvasCtx) => void;