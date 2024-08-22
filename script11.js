//switch case statement in js:(1)

let day = 1; // 6 represents the saturday

switch (day){
  case 1:
    console.log("It's Monday");//(fall-through) when their is no break b/w two cases then both cases are logged//
   

    case 2:
      console.log("It's Teusday");
      break;

      case 3:
        console.log("It's Wednesday");
        break;

        case 4:
          console.log("It's Thursday");
          break;

          case 5:
            console.log("It's Friday");
            break;
            
            case 6:
              console.log("It's Saturday");
              break;

              case 7:
                console.log("It's Sunday");
                break;


        default:
          console.log("It's some other day");

}


