using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Komorebi.Services
{
    public interface IMessages
    {
        string Hello();
    }
    public class Massages : IMessages
    {
        public string Hello()
        {
            return "Hollow world";
        }
    }


}
