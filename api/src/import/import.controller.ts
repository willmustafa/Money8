import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportService } from './import.service';

@Controller('import')
export class ImportController {
  constructor(private readonly importService: ImportService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    return this.importService.importFromOFX(file?.buffer?.toString());
  }
}
