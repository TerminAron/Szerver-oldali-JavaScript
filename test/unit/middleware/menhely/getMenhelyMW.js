var expect = require('chai').expect;
var getMenhelyMW = require('../../../../middleware/menhely/getMenhelyMW');

describe('getMenhelyMW middleware ', function (){

    it('should set res.locals.menhely with a menhely object from DB', function (done){
        const mw = getMenhelyMW({
            AnimalHomeModel:{
                findOne: (p1, cb)=> {
                    expect(p1).to.be.eql({_id: '1'});
                    cb(null, 'mockmenhely');
                }
            }
        });
        const resMock = {
            locals: {}
        };
        mw({
            params:{
                menhelyid: '1'
            }
        },
        resMock   
        ,(err)=>{
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({menhely: 'mockmenhely'});
            done();

        });

    });
    it('should call next with error when db problem shows up', function (done){
        const mw = getMenhelyMW({
            AnimalHomeModel:{
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
                menhelyid: '1'
            }
        },
        resMock   
        ,(err)=>{
            expect(err).to.be.eql('dberror');
            done();

        });

    });
    it('should call next when no menhely founf in the DB', function (done){
        const mw = getMenhelyMW({
            AnimalHomeModel:{
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
                menhelyid: '1'
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