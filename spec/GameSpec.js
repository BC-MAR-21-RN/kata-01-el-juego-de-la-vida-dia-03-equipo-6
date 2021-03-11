describe('Game', function () {
  it('can game be instance of Game', function () {
    game = new Game();
    expect(game).toBeInstanceOf(Game);
  });

  describe('World', function () {
    let world;
    
    beforeEach(function () {
      world = new World(4, 8);
    });

    it('can world be instance of World', function () {
      expect(world).toBeInstanceOf(World);
    });

    it('can world be an array type', function(){
      expect(world.createBoard()).toEqual(jasmine.any(Array));
    });

    it('can world be printed', function(){
      world.createBoard()
      expect(world.getBoard()).toEqual(jasmine.any(Array))
    });

    it('can found one living cell', function () {
      world.createBoard()
      expect(world.livingCell(2, 4)).toBe(1);
    });

    it('can found one living neighbour', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      expect(world.neighbours(2, 4)).toBe(1)
    });

    it('can found two living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      expect(world.neighbours(2, 4)).toBe(2)
    });

    it('can found three living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      expect(world.neighbours(2, 4)).toBe(3)
    });

    it('can found four living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      expect(world.neighbours(2, 4)).toBe(4)
    });

    it('can found five living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      world.livingCell(1, 3)
      expect(world.neighbours(2, 4)).toBe(5)
    });

    it('can found six living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      world.livingCell(1, 3)
      world.livingCell(1, 5)
      expect(world.neighbours(2, 4)).toBe(6)
    });

    it('can found seven living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      world.livingCell(1, 3)
      world.livingCell(1, 5)
      world.livingCell(3, 3)
      expect(world.neighbours(2, 4)).toBe(7)
    });

    it('can found eight living neighbours', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      world.livingCell(1, 3)
      world.livingCell(1, 5)
      world.livingCell(3, 3)
      world.livingCell(3, 5)
      expect(world.neighbours(2, 4)).toBe(8)
    });

    it('can found three living neighbours on fronts', function () {
      world.createBoard()
      world.livingCell(0, 0)
      world.livingCell(0, 1)
      world.livingCell(1, 0)
      world.livingCell(1, 1)
      expect(world.neighbours(0, 0)).toBe(3)
    });

    it('can a cell with fewer than two neighbours dies', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      expect(world.liveOrDie(2, 4)).toBe(0)
    });
    
    it('can a cell with with more than three neighbours dies', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      world.livingCell(2, 5)
      expect(world.liveOrDie(2, 4)).toBe(0)
    });

    it('can a cell with at least two or three neighbours lives', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      expect(world.liveOrDie(2, 4)).toBe(1)
    });
  
    it('can a dead cell with three neighbours gets alive', function () {
      world.createBoard()
      world.livingCell(2, 4)
      world.livingCell(1, 4)
      world.livingCell(3, 4)
      world.livingCell(2, 3)
      expect(world.liveOrDie(2, 4)).toBe(1) 
    });
  });
});