import DoodleAlert from "@/layouts/core/components/UI/doodleAlert/DoodleAlert";
import happy from "@/assets/images/happy.png";
import Card from "@/layouts/core/components/UI/card/Card";
import TagColor from "@/layouts/core/components/UI/tagColor/TagColor";
import CategoryChart from "@/layouts/core/components/CategoryChart/CategoryChart";
import InfoCardsHeader from "@/layouts/modules/InfoCardsHeader";
import CreditCardsSlider from "@/layouts/core/components/CreditCardsSlider/CreditCardsSlider";
import FiscalBalanceChart from "@/layouts/core/components/FiscalBalanceChart/FiscalBalanceChart";

export default function Home() {
  return (
    <>
      <InfoCardsHeader />
      <div className="row mt-4">
        <div className="col-12 col-lg-6">
          <CreditCardsSlider />
          <FiscalBalanceChart />
        </div>
        <div className="col-12 col-lg-6 gap-3 d-flex flex-column">
          <DoodleAlert
            subtitle="Esse mês você economizou R$ 450,00 a mais que o mês passado!"
            title="Muito bem Thaila!"
            color="indigo"
            image={happy}
          />
          <Card title="Categorias">
            <div className="col-6 gap-2 d-flex flex-column">
              <TagColor
                title="Investimentos"
                subtitle="R$ 500 / R$ 1.000"
                color="indigo"
              />
              <TagColor
                title="Receitas"
                subtitle="R$ 500 / R$ 1.000"
                color="green"
              />
              <TagColor
                title="Despesas"
                subtitle="R$ 500 / R$ 1.000"
                color="danger"
              />
            </div>
            <div className="col-6 gap-4 d-flex flex-column align-items-start">
              <CategoryChart
                percentage={0.5}
                name="Gastos Essenciais"
                color="danger"
              />
              <CategoryChart
                percentage={0.2}
                name="Investimentos"
                color="blue"
              />
              <CategoryChart
                percentage={0.3}
                name="Gastos Comuns"
                color="orange"
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
