import { StreamableFile } from '@nestjs/common';
import { Response } from 'express';
export declare class DownloadController {
    constructor();
    download(res: Response): StreamableFile;
}
