import { ApiConstant, EnvConstant, LangConstant } from "const";
import { useTranslation } from "react-i18next";
import { AppService } from "services";

const useHandleGetAnswerPossibility = () => {
  const { i18n } = useTranslation();

  const handleGetAnswerPossibility = async (data: number) => {
    try {
      const language =
        i18n.language === LangConstant.DEFAULT_LANG_CODE ? LangConstant.DEFAULT_LANG_CODE : "vi";

      let text = "";
      switch (data) {
        case 0:
          text = "no";
          break;
        case 1:
          text = "yes";
          break;
        case 2:
          text = "maybe";
          break;

        default:
          text = "no";
      }

      const response = await AppService.getPossibility({
        option: text,
        language,
      });

      if (response.status === ApiConstant.STT_OK) {
        const responseData: any = response.data;

        return responseData.data;
      }
      return "";
    } catch (error) {
      EnvConstant.IS_DEV && console.log(error);

      return "";
    }
  };

  return handleGetAnswerPossibility;
};

export default useHandleGetAnswerPossibility;
