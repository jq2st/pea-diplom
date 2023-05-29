import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import * as fs from 'fs';
import { join } from 'path';
import { Public } from 'src/decorators/public.decorator';
import { Response } from 'express';

@Controller('api/download')
export class DownloadController {

  constructor (
  ) {}

  @Public()
  @Get('conditions')
  download(@Res({ passthrough: true }) res: Response): StreamableFile {
    const fileName = 'conditions.pdf'
    const path = join('assets', fileName)
    const file = fs.createReadStream(path)
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${fileName}"`,
    })
    return new StreamableFile(file)
  }
  
}
