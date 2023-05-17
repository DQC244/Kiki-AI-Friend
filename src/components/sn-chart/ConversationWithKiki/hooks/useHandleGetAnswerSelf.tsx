import { ApiConstant, EnvConstant } from "const";
import { AppService } from "services";

const useHandleGetAnswerSelf = () => {
  const handleGetAnswerSelf = async (data: any) => {
    try {
      const response = await AppService.getSelf(data);

      if (response.status === ApiConstant.STT_OK) {
        const responseData: any = response.data;
        const newMessage = responseData.data?.map((item: any, index: number) => {
          return { label: item?.answer_content, isDelay: true, orderId: index };
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
