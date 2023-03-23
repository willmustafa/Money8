import Head from "next/head";
import Layout from "@/layouts/default/Layout";
import CardInfo from "@/layouts/core/components/UI/cardInfo/CardInfo";
import DoodleAlert from "@/layouts/core/components/UI/doodleAlert/DoodleAlert";
import happy from "@/assets/images/happy.png";
import Card from "@/layouts/core/components/UI/card/Card";
import TagColor from "@/layouts/core/components/UI/tagColor/TagColor";
import CategoryChart from "@/layouts/core/components/CategoryChart/CategoryChart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Money 8</title>
        <meta name="description" content="Controle financeiro pessoal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Layout>
          <div className="row justify-content-stretch">
            <div className="col-3">
              <CardInfo
                title="Saldo do mês"
                value={10.5}
                percentage={-20}
                icon="money-bill"
              />
            </div>
            <div className="col-3">
              <CardInfo
                title="Despesas do mês"
                value={10.5}
                percentage={10}
                icon="money-bill"
              />
            </div>
            <div className="col-3">
              <CardInfo
                title="Receitas do mês"
                value={10.5}
                percentage={40}
                icon="money-bill"
                iconColor="green"
              />
            </div>
            <div className="col-3">
              <CardInfo title="Saldo Total" value={10000.5} icon="money-bill" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6"></div>
            <div className="col-6 gap-3 d-flex flex-column">
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
                  <CategoryChart percentage={0.5} name='Gastos Essenciais' color="danger"/>
                  <CategoryChart percentage={0.2} name='Investimentos' color='blue' />
                  <CategoryChart percentage={0.3} name='Gastos Comuns' color='orange' />
                </div>
              </Card>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
