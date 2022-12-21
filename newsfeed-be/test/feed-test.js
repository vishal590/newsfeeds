const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("NewsFeed", function() {
    this.timeout(0);

    let NewsFeed;
    let NewsFeedContract;

    before(async () => {
        NewsFeed = await ethers.getContractFactory("NewsFeed");
        NewsFeedContract = await NewsFeed.deploy();
    });

    it("should deploy", async () => {
        expect(NewsFeedContract.address).to.not.be.null;
    });
    // it means contract address is not null

    it("should have default value 0", async () => {
        const value = await NewsFeedContract.getTotalFeeds();
        expect(value.toString()).to.equal("0");
    });

    it("should be able to create feed", async () => {
        const tx = await NewsFeedContract.createFeed(
            "Hello World",
            "New York world",
            "New York",
            "Sports",
            "0x123",
            "2022-05-05"
        );

        expect(tx.hash).to.not.be.null;
    });

    it("should be able to get feeds", async () => {
        const tx = await NewsFeedContract.createFeed(
            "Hello World",
            "New York world",
            "New York",
            "Sports",
            "0x123",
            "2022-05-05"
        );

        const feeds = await NewsFeedContract.getAllFeeds();
        expect(feeds.length).to.equal(2);
    });

    it("should be able to get feed count", async () => {
        const tx = await NewsFeedContract.createFeed(
          "Hello World",
          "New York world",
          "New York",
          "Sports",
          "0x123",
          "2022-05-05"
        );
        const newsCount = await NewsFeedContract.getTotalFeeds();
        expect(newsCount.toString()).to.equal("3");
      });

      it("should be able to get feed by id", async () => {
        const tx = await NewsFeedContract.createFeed(
            "Hello World",
            "New York world",
            "New York",
            "Sports",
            "0x123",
            "2022-05-05"
        );

        const news = await NewsFeedContract.getFeed(2);
        expect(news.title).to.equal("Hello World");
      });


});