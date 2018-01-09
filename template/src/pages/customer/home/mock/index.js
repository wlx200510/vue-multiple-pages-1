import Mock from 'mockjs'
/*
* 这个是主要用于演示mockjs与vue的集成
* 更多数据生成函数参考mockjs文档
*/ 
const Random = Mock.Random;

const produceData = function(opt) {
    let items = []
    for (let i=0; i<5; i++) {
        items.push({
            name: Random.cname(2, 8),
            date: Random.date() + ' ' + Random.time()
        })
    }
    return items
}

Mock.mock('/items', /post|get/i, produceData);