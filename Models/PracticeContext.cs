using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PEMS.Models
{
    public partial class PracticeContext : DbContext
    {
        public PracticeContext()
        {
        }

        public PracticeContext(DbContextOptions<PracticeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Student> Students { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=NITRO5; Database=Practice; Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.StudId);

                entity.ToTable("Student");

                entity.Property(e => e.StudId)
                    .ValueGeneratedNever()
                    .HasColumnName("STUD_ID");

                entity.Property(e => e.Status).HasColumnName("STATUS");

                entity.Property(e => e.StudFname)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("STUD_FNAME");

                entity.Property(e => e.StudLname)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("STUD_LNAME");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
