using System;
using System.Collections.Generic;

namespace PEMS.Models
{
    public partial class Student
    {
        public int StudId { get; set; }
        public string StudFname { get; set; } = null!;
        public string StudLname { get; set; } = null!;
        public byte? Status { get; set; }
    }
}
