import { ApiConstant, EnvConstant } from "const";
import { AppService } from "services";

const useHandleGetAnswerSelf = () => {
  const handleGetAnswerSelf = async (dataEn: any, dataVi: any) => {
    try {
      const [responseEn, responseVi] = await Promise.all([
        AppService.getSelf(dataEn),
        AppService.getSelf(dataVi),
      ]);

      if (responseEn.status === ApiConstant.STT_OK && responseVi.status === ApiConstant.STT_OK) {
        const responseDataEn: any = responseEn.data;
        const responseDataVi: any = responseVi.data;
        const newMessage = responseDataEn.data?.map((item: any, index: number) => {
          return {
            labelEn: item?.answer_content,
            isDelay: true,
            orderId: index,
            labelVi: responseDataVi.data[index]?.answer_content,
          };
        });

        return newMessage;
      }
      return [];
    } catch (error) {
      EnvConstant.IS_DEV && console.log(error);

      return [];
    }
  };

  return handleGetAnswerSelf;
};

export default useHandleGetAnswerSelf;
