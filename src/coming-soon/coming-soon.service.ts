import { Injectable } from '@nestjs/common';
import { prisma } from 'src/prisma/prisma.service';

@Injectable()
export class ComingSoonService {
    constructor() {}

  async registerEmail(email: string) {
    // Normally, you'd save to DB or call another API
    try{

        const existing = await prisma.preSignedUsers.findUnique({
            where: { email },
        });
  
        if (existing) {
            return { message: 'Email already registered', success: true };
        }
        
        // Add new email
        const user = await prisma.preSignedUsers.create({
            data: { email },
        });
        
        return { message: 'Email registered successfully', "success":"True" };
    }
    catch(err){
        return {message: 'Email not registered', "success":"False"}
    }
  }
}
