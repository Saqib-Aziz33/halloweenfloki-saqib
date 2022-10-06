import Bar from "../utils/Bar"
import {TbCurrencyDollar, TbSpeakerphone, TbPool} from 'react-icons/tb'
import {RiAdminFill} from "react-icons/ri"

function Tokenomics() {
  return (
    <div className="tokenomics px-2 px-sm-0" id="tokenomics">
      <div className="container py-5">
        <section>
          <h6><Bar /> WHAT IS OUR TOKENOMICS</h6>
          <p className="mt-3 mb-4">At Halloween Floki, we are designing a project based on definitive market rules and fundamental economic principles. Halloween Floki reconciles a high-performance protocol with integral price stability features.</p>
          <p className="my-5">Total Sudopply: 1 000 000 000 000 FLOH</p>
          <p className="my-5">8% Buy and Sell Tax:</p>

          <ul className="my-5">
            <li>4% holders rewards: Dividend tax on all transactions that will be distributed every 24 hours to holders in BUSD.</li>
            <li>1% liquidity: Liquidity tax on all transactions to prevent major price fluctuation after a large trade by filling the liquidity pool.</li>
            <li>3% marketing: Marketing tax on all transactions allows the Halloween Floki marketing team to reinvest and grow the project to its maximum potential.</li>
          </ul>
        </section>
        <h6><Bar /> WHAT ARE OUR FEATURES</h6>
        <div className="row my-5">
          <div className="col-md-6 col-lg-3 mb-3 columns">
            <TbCurrencyDollar size={80} />
            <h4 className="my-4">$BUSD Rewards</h4>
            <p className="fw-normal">Earn automatic Binance pegged USD ($BUSD), rewards by holding your Halloween Floki Coin – 4% of every buy, transfer and sell transaction is redistributed automatically to $FLOH holders. You will receive the rewards automatically in your wallet or claim your rewards manually in our upcoming reward app tracker.</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 columns">
            <TbSpeakerphone size={80} />
            <h4 className="my-4">Marketing</h4>
            <p className="fw-normal">3% of every transaction will directly go to the marketing wallet in order to ensure an increase in exposure throughout advertisement platforms, social media and to secure contracts and deals with influencers. This will help FLOH achieve an international status and to be known within every community!</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 columns">
            <TbPool size={80} />
            <h4 className="my-4">Liquidity Pool</h4>
            <p className="fw-normal">Our Smart contract deposits 1% from every transaction as $FLOH and $BNB into a liquidity pool which has been locked and certified. Pancakeswap fixes the low liquidity problems of DEXs through their Liquidity Pools, ensuring traders can always Buy & Sell without liquidity issues. A bigger liquidity pool will provide more stability to the $FLOH price.</p>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 columns">
            <RiAdminFill size={80} />
            <h4 className="my-4">Anti-Whale Mechanism</h4>
            <p className="fw-normal">Our Anti-Whale mechanism ensures that no single transaction order can amount to more than 1% of the total supply of $FLOH. The Anti-Whale Mechanism won’t necessarily stop whales from selling, but having a maximum limit helps to prevent large selloffs and price manipulation.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Tokenomics