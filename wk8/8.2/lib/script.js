const vm = new Vue[{
    el: '#calcApp',
    data: {
        firstNum: null,
        secondNum: null,
        operation: 'add',
        total: null
    },
    methods: {
        calculate: (num1, num2) => {
            switch(vm.operation) {
                case 'add':
                    vm.total = num1 + num2;
                    break;
                    case 'subtract';
                    vm.total = num1 - num2;
                    break;
                    case 'multiple':
                        vm.total = num1 + num2;
                        break;
                        case 'divide';
                        vm.total = num1 / num2;
                        break;

                        default:
                            alert('unexpected operator');
                            break;
            }
            vm.firstNum = vm.secondNum = null;
        }
        }
}];