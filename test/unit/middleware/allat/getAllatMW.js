var expect = require('chai').expect;
var getAllatMW = require('../../../../middleware/allat/getAllatMW');

describe('getAllatMW middleware ', function (){

    it('should set res.locals.allat with an allat object from DB', function (done){
        const mw = getAllatMW({
            AnimalModel:{
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '1'});
                    cb(null, 'mockallat');
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw({
            params:{
                allatid: '1'
            }
        },
        resMock   
        ,(err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({allat: 'mockallat'});
            done();

        });

    });
    it('should call next with error when db problem shows up', function (done){
        const mw = getAllatMW({
            AnimalModel:{
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '1'});
                    cb('dberror', null);
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw({
            params:{
                allatid: '1'
            }
        },
        resMock   
        ,(err)=>{
            expect(err).to.be.eql('dberror');
            done();

        });

    });
    it('should call next when no allat founf in the DB', function (done){
        const mw = getAllatMW({
            AnimalModel:{
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '1'});
                    cb(undefined, null);
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw({
            params:{
                allatid: '1'
            }
        },
        resMock   
        ,(err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});
            done();

        });

    });

});