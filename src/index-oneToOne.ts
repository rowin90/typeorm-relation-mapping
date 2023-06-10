import {AppDataSource} from "./data-source"
import {User} from "./entity/User"
import {IdCard} from "./entity/IdCard";

AppDataSource.initialize().then(async () => {

    // const user = new User()
    // user.firstName = "guang"
    // user.lastName = "guang"
    // user.age = 25
    // //
    // const idCard = new IdCard();
    //
    // idCard.cardName = '11111'
    // idCard.user = user
    // await AppDataSource.manager.save(idCard)

    // const ics = await AppDataSource.manager.find(IdCard,{
    //     relations:{
    //         user:true
    //     }
    // });
    //
    // const ics = await AppDataSource.manager.getRepository(IdCard)
    //     .createQueryBuilder("ic")
    //     .leftJoinAndSelect("ic.user", "u")
    //     .getMany()
    //
    // console.log(ics);
    //

    // update
    // const user = new User();
    // user.id = 1;
    // user.firstName = 'guang1111';
    // user.lastName = 'guang1111';
    // user.age = 20;
    //
    // const idCard = new IdCard();
    // idCard.id = 1;
    // idCard.cardName = '22222';
    // idCard.user = user;
    // await AppDataSource.manager.save(idCard);


    // 反着查关联

    const user = await AppDataSource.manager.find(User, {
        relations: {
            idCard: true
        }
    });
    console.log('user : ', user);

}).catch(error => console.log(error))
