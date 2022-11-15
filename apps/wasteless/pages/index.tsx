import {
  Table,
  LayoutContainer,
  Header,
  HomeContainer,
  Input,
  Button,
} from "cyber-ui";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "../components/Layout";

type Column = {
  key: string;
  title: string;
};

interface TableData {
  data: Product[];
  columns: Column[];
}

const dataFromAPIMock = [
  {
    id: "01",
    product: "Bife bovino",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2023-10-01T10:00:00.000Z"),
  },
  {
    id: "02",
    product: "Bife bovino",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2023-10-01T10:00:00.000Z"),
  },
  {
    id: "03",
    product: "Bife bovino",
    expiration: new Date("2023-10-01T10:00:00.000Z"),
    addedDate: new Date("2023-10-01T10:00:00.000Z"),
  },
];

const dateToStringConversor = (rawDataMock) => {
  return rawDataMock.map((element) => {
    element.expiration = element.expiration.toLocaleDateString("pt-BR");
    element.addedDate = element.addedDate.toLocaleDateString("pt-BR");
    return element;
  });
};

const cookedDataMock = dateToStringConversor(dataFromAPIMock);

const tableDataMock: TableData = {
  data: cookedDataMock,
  columns: [
    {
      key: "product",
      title: "Produto",
    },
    {
      key: "expiration",
      title: "Validade",
    },
    {
      key: "addedDate",
      title: "Data de criação",
    },
  ],
};

const newProductFormValidationSchema = zod.object({
  product: zod
    .string({
      required_error: "Por favor, escreva um nome",
      invalid_type_error: "Esse nome não é válido",
    })
    .min(2, "Insira o nome do alimento")
    .max(20, "Número de caracteres excedido"),

  // this zod validator have a preprocess
  expiration: zod.preprocess(
    (arg) => {
      if (typeof arg === "string" || arg instanceof Date) return new Date(arg);
    },
    zod
      .date({
        required_error: "Por favor, selecione uma data",
        // invalid_type_error: "Essa não é uma data válida",
      })
      .min(new Date(), { message: "Não pode adicionar produto vencido" })
  ),
});

type NewProductFormData = zod.infer<typeof newProductFormValidationSchema>;

interface Product {
  id: string;
  product: string;
  expiration: Date;
  addedDate: Date;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newProductFormValidationSchema),
  });

  const [tableData, setTableData] = useState(tableDataMock);

  const handleCreateNewProduct = (data: NewProductFormData) => {
    alert(JSON.stringify(data));

    console.log("teste");

    const id = String(new Date().getTime());
    const newProduct: Product = {
      id,
      product: data.product,
      expiration: data.expiration,
      addedDate: new Date(),
    };

    setTableData({
      columns: tableData.columns,
      data: [...tableData.data, ...dateToStringConversor([newProduct])],
    });

    reset();
  };

  return (
    <div>
      <Layout />
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewProduct)}>
          <Input {...register("product")} />
          {errors.product?.message}
          <Input {...register("expiration")} type="date" />
          {errors.expiration?.message}
          <Button> Adicionar Produto</Button>
        </form>

        <Table {...tableData} />
      </HomeContainer>
      <div id="Footer"></div>
    </div>
  );
}
