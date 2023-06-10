# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# 一对一
1. 实体 user 和 idCard，一个用户对应一张卡

TypeORM 里一对一关系的映射通过 @OneToOne 装饰器来声明，维持外键列的 Entity 添加 @JoinColumn 装饰器。

如果是非外键列的 Entity，想要关联查询另一个 Entity，则需要通过第二个参数指定外键列是另一个 Entity 的哪个属性。

可以通过 @OneToOne 装饰器的 onDelete、onUpdate 参数设置级联删除和更新的方式，比如 CASCADE、SET NULL 等。

还可以设置 cascade，也就是 save 的时候会自动级联相关 Entity 的 save。

增删改分别通过 save 和 delete 方法，查询可以通过 find 也可以通过 queryBuilder，不过要 find 的时候要指定 relations 才会关联查询。

# 一对多
1. 实体 Department 和 Employee

通过 @ManyToOne 或者 @OneToMany 装饰器。

TypeORM 会自动在多的那一方添加外键，不需要通过 @JoinColumn 指定，不过你可以通过 @JoinColumn 来修改外键列的名字。

双方只能有一方 cascade，不然会无限循环。设置了 cascade 之后，只要一方保存，关联的另一方就会自动保存。

删除的话，如果设置了外键的 CASCADE 或者 SET NULL，那只删除主表（一的那一方）对应的 Entity 就好了，msyql 会做后续的关联删除或者 id 置空。

否则就要先删除所有的从表（多的那一方）对应的 Entity 再删除主表对应的 Entity。

这就是 typeorm 的一对多关系的映射和 CRUD。

# 多对多
1. 实体 Article 和 Tag

这节我们学了多对多关系在 Entity 里怎么映射，是通过 @ManyToMany 和 @JoinTable 来声明的。

但如果双方都保留了对方的引用，需要第二个参数来指定关联的外键列在哪，也就是如何查找当前 entity。

多对多关系的修改只要查出来之后修改下属性，然后 save，TypeORM 会自动去更新中间表。

至此，一对一、一对多、多对多关系的 Entity 如何映射到数据库的 table，如何增删改查，我们就都学会了。
