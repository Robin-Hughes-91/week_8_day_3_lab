use bucket_list;
db.dropDatabase();

db.buckets.insertMany([
  {
    goal: "Climb Everest",
    location: "Everest",
    companion: "Billy"
  },
  {
    goal: "Be a millionaire",
    location: "World",
    companion: "family"
  },
  {
    goal: "Raise a family",
    location: "Scotland",
    companion: "Hannah"
  },
  {
    goal: "Plant Trees",
    location: "Scotland",
    companion: "kids"
  }

]);
